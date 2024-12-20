"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicantJobsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const applicant_job_controller_1 = require("./applicant-job.controller");
const applicant_job_entity_1 = require("./applicant-job.entity");
const applicants_job_service_1 = require("./providers/applicants-job.service");
let ApplicantJobsModule = class ApplicantJobsModule {
};
exports.ApplicantJobsModule = ApplicantJobsModule;
exports.ApplicantJobsModule = ApplicantJobsModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, filter_date_module_1.FilterDateModule, typeorm_1.TypeOrmModule.forFeature([applicant_job_entity_1.ApplicantJob])],
        controllers: [applicant_job_controller_1.ApplicantJobController],
        providers: [applicants_job_service_1.ApplicantJobsService],
    })
], ApplicantJobsModule);
//# sourceMappingURL=applicants-job.module.js.map