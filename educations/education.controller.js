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
exports.EducationController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const base_controller_1 = require("../shared/common/base/base.controller");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const education_service_1 = require("./providers/education.service");
let EducationController = class EducationController extends base_controller_1.BaseController {
    constructor(educationService, TransformRequest) {
        super(educationService, TransformRequest);
        this.educationService = educationService;
        this.TransformRequest = TransformRequest;
        this.propertiesRel = ["created_by", "education_accordion", "education_details"];
    }
    async findBySlug(slug) {
        return this.educationService.findBySlug(slug);
    }
};
exports.EducationController = EducationController;
__decorate([
    (0, common_1.Get)(":slug"),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Param)("slug")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EducationController.prototype, "findBySlug", null);
exports.EducationController = EducationController = __decorate([
    (0, common_1.Controller)("education"),
    __metadata("design:paramtypes", [education_service_1.EducationService,
        transform_request_entity_provider_1.TransformRequest])
], EducationController);
//# sourceMappingURL=education.controller.js.map