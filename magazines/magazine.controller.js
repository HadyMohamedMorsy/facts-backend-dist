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
exports.MagazineController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const category_service_1 = require("../categories/providers/category.service");
const base_controller_1 = require("../shared/common/base/base.controller");
const filter_dto_1 = require("../shared/common/filter/dtos/filter.dto");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const transfrom_request_interceptor_1 = require("../shared/common/interceptor/transfrom-request.interceptor");
const multer_options_1 = require("../shared/config/multer-options");
const create_magazine_dto_1 = require("./dto/create-magazine.dto");
const magazine_service_1 = require("./providers/magazine.service");
let MagazineController = class MagazineController extends base_controller_1.BaseController {
    constructor(magazineService, TransformRequest, categoryService) {
        super(magazineService, TransformRequest);
        this.magazineService = magazineService;
        this.TransformRequest = TransformRequest;
        this.categoryService = categoryService;
        this.propertiesRel = ["created_by", "categories"];
    }
    async create(files, createDto, request) {
        const categoryIds = createDto.selectedCategories.map((item) => item.value);
        const categories = await this.categoryService.findMultipleCategories(categoryIds);
        const updateDto = { ...createDto, categories };
        return await super.create(files, updateDto, request);
    }
    async delete(body, request) {
        const entity = await this.magazineService.findOne(+body.id, ["categories"]);
        await this.magazineService.deleteMagazineRelations(entity, request);
        return await super.delete(body, request);
    }
    front(filterQueryDto) {
        return this.magazineService.front(filterQueryDto);
    }
    slug(filterQueryDto) {
        return this.magazineService.findBySlugWithPaginatedBlogs(filterQueryDto);
    }
};
exports.MagazineController = MagazineController;
__decorate([
    (0, common_1.Post)("/store"),
    (0, common_1.UseInterceptors)(transfrom_request_interceptor_1.HeaderToBodyInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)(multer_options_1.default)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array,
        create_magazine_dto_1.CreateMagazineDto, Object]),
    __metadata("design:returntype", Promise)
], MagazineController.prototype, "create", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MagazineController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)("front/index"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], MagazineController.prototype, "front", null);
__decorate([
    (0, common_1.Post)("magazines/blogs"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], MagazineController.prototype, "slug", null);
exports.MagazineController = MagazineController = __decorate([
    (0, common_1.Controller)("magazine"),
    __metadata("design:paramtypes", [magazine_service_1.MagazineService,
        transform_request_entity_provider_1.TransformRequest,
        category_service_1.CategoryService])
], MagazineController);
//# sourceMappingURL=magazine.controller.js.map