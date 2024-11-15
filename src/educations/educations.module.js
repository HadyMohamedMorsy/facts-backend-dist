"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const education_accordion_entity_1 = require("./education-accordion.entity");
const education_details_entity_1 = require("./education-details.entity");
const education_controller_1 = require("./education.controller");
const education_entity_1 = require("./education.entity");
const education_service_1 = require("./providers/education.service");
let EducationsModule = class EducationsModule {
};
exports.EducationsModule = EducationsModule;
exports.EducationsModule = EducationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            filter_date_module_1.FilterDateModule,
            typeorm_1.TypeOrmModule.forFeature([education_entity_1.Education, education_accordion_entity_1.EducationAccordion, education_details_entity_1.EducationDetails]),
        ],
        controllers: [education_controller_1.EducationController],
        providers: [education_service_1.EducationService],
    })
], EducationsModule);
//# sourceMappingURL=educations.module.js.map