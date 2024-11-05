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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Education = void 0;
const applicant_education_entity_1 = require("../applicants-education/applicant-education.entity");
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
const education_accordion_entity_1 = require("./education-accordion.entity");
const education_details_entity_1 = require("./education-details.entity");
let Education = class Education extends base_entity_1.Base {
};
exports.Education = Education;
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Education.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Education.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 256,
        unique: true,
    }),
    __metadata("design:type", String)
], Education.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => applicant_education_entity_1.ApplicantEducation, application => application.education, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Education.prototype, "applications", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "intro_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "intro_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "short_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "short_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Education.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => education_accordion_entity_1.EducationAccordion, education => education.education, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Education.prototype, "education_accordion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => education_details_entity_1.EducationDetails, education => education.education, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Education.prototype, "education_details", void 0);
exports.Education = Education = __decorate([
    (0, typeorm_1.Entity)()
], Education);
//# sourceMappingURL=education.entity.js.map