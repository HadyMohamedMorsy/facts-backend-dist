"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_decorator_1 = require("../../../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../../../auth/enums/auth-type.enum");
const multer_options_1 = require("../../config/multer-options");
const utilits_1 = require("../../helpers/utilits");
const filter_dto_1 = require("../filter/dtos/filter.dto");
const transform_request_entity_provider_1 = require("../filter/providers/transform-request.entity.provider");
const transfrom_request_interceptor_1 = require("../interceptor/transfrom-request.interceptor");
const validateDto_pipe_1 = require("../pipes/validateDto.pipe");
let BaseController = class BaseController {
    constructor(baseService, transform) {
        this.baseService = baseService;
        this.transform = transform;
        this.propertiesRel = ["created_by"];
        this.duplicatedPropertirs = ["order", "slug"];
    }
    front(filterQueryDto) {
        return this.baseService.front(filterQueryDto);
    }
    index(filterQueryDto) {
        return this.baseService.findAll(filterQueryDto);
    }
    async create(files, createDto, request) {
        try {
            const validateBody = await this.processFileUpload(request, createDto, files);
            return await this.baseService.create(validateBody, this.propertiesRel);
        }
        catch (error) {
            (0, utilits_1.cleanFilesWithError)(files);
            throw error;
        }
    }
    async update(files, patch, request) {
        try {
            const entity = await this.baseService.findOne(+patch.id, this.propertiesRel);
            (0, utilits_1.checkUpdateFiles)(entity, patch, request);
            const body = await this.transform
                .initEntity(request, patch, entity)
                .handleFiles(files)
                .checkDuplicate(this.duplicatedPropertirs)
                .updateEntity()
                .getUpdatedEntity();
            const validateBody = await (0, validateDto_pipe_1.validateDto)(request.path, body, false);
            return await this.baseService.update(validateBody, this.propertiesRel);
        }
        catch (error) {
            (0, utilits_1.cleanFilesWithError)(files);
            throw error;
        }
    }
    async delete(body, request) {
        return await this.baseService.delete(+body.id, request);
    }
    async processFileUpload(request, createDto, files) {
        const baseURL = `${request.protocol}://${request.headers.host}`;
        const modulePath = request.path.split("/")[3];
        if (!files || (Array.isArray(files) && files.length === 0)) {
            return (0, validateDto_pipe_1.validateDto)(request.path, createDto);
        }
        const updatedDto = { ...createDto };
        const fileGroup = {};
        files.forEach(file => {
            const fileUrl = `${baseURL}/public/uploads/${modulePath}/${file.filename}`;
            const fieldname = file.fieldname.replace(/\[\d+\]$/, "");
            if (fileGroup[fieldname]) {
                fileGroup[fieldname].push(fileUrl);
            }
            else {
                fileGroup[fieldname] = [fileUrl];
            }
        });
        Object.keys(fileGroup).forEach(fieldname => {
            if (fileGroup[fieldname].length > 1) {
                updatedDto[fieldname] = fileGroup[fieldname];
            }
            else {
                updatedDto[fieldname] = fileGroup[fieldname][0];
            }
        });
        return (0, validateDto_pipe_1.validateDto)(request.path, updatedDto);
    }
};
exports.BaseController = BaseController;
__decorate([
    (0, common_1.Post)("front/index"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "front", null);
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], BaseController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(transfrom_request_interceptor_1.HeaderToBodyInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)(multer_options_1.default)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)(transfrom_request_interceptor_1.HeaderToBodyInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)(multer_options_1.default)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], BaseController.prototype, "delete", null);
exports.BaseController = BaseController = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object, transform_request_entity_provider_1.TransformRequest])
], BaseController);
//# sourceMappingURL=base.controller.js.map