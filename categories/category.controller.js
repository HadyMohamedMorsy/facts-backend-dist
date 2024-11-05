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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const base_controller_1 = require("../shared/common/base/base.controller");
const filter_dto_1 = require("../shared/common/filter/dtos/filter.dto");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const category_service_1 = require("./providers/category.service");
let CategoryController = class CategoryController extends base_controller_1.BaseController {
    constructor(categoryService, TransformRequest) {
        super(categoryService, TransformRequest);
        this.categoryService = categoryService;
        this.TransformRequest = TransformRequest;
    }
    autoComplete(filterQueryDto) {
        return this.categoryService.autoComplete(filterQueryDto);
    }
    async delete(body, request) {
        const entity = await this.categoryService.findOne(+body.id, ["magazines"]);
        await this.categoryService.deleteCategoriesRelations(entity, request);
        return await super.delete(body, request);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)("autocomplete/index"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], CategoryController.prototype, "autoComplete", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "delete", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)("category"),
    __metadata("design:paramtypes", [category_service_1.CategoryService,
        transform_request_entity_provider_1.TransformRequest])
], CategoryController);
//# sourceMappingURL=category.controller.js.map