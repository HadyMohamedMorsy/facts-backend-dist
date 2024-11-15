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
exports.ApplicantJobController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const base_controller_1 = require("../shared/common/base/base.controller");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const transfrom_request_interceptor_1 = require("../shared/common/interceptor/transfrom-request.interceptor");
const multer_options_1 = require("../shared/config/multer-options");
const applicants_job_service_1 = require("./providers/applicants-job.service");
let ApplicantJobController = class ApplicantJobController extends base_controller_1.BaseController {
    constructor(applicantJobsService, transformRequest) {
        super(applicantJobsService, transformRequest);
        this.applicantJobsService = applicantJobsService;
        this.transformRequest = transformRequest;
        this.duplicatedPropertirs = [];
    }
    async create(files, createDto, request) {
        super.create(files, createDto, request);
    }
};
exports.ApplicantJobController = ApplicantJobController;
__decorate([
    (0, common_1.Post)("/store/front"),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    (0, common_1.UseInterceptors)(transfrom_request_interceptor_1.HeaderToBodyInterceptor),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)(multer_options_1.default)),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object, Object]),
    __metadata("design:returntype", Promise)
], ApplicantJobController.prototype, "create", null);
exports.ApplicantJobController = ApplicantJobController = __decorate([
    (0, common_1.Controller)("applicant-Job"),
    __metadata("design:paramtypes", [applicants_job_service_1.ApplicantJobsService,
        transform_request_entity_provider_1.TransformRequest])
], ApplicantJobController);
//# sourceMappingURL=applicant-job.controller.js.map