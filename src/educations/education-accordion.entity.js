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
exports.EducationAccordion = void 0;
const base_time_entity_1 = require("../shared/common/base/entity/base-time.entity");
const typeorm_1 = require("typeorm");
const education_entity_1 = require("./education.entity");
let EducationAccordion = class EducationAccordion extends base_time_entity_1.BaseTime {
};
exports.EducationAccordion = EducationAccordion;
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 512,
        nullable: false,
    }),
    __metadata("design:type", String)
], EducationAccordion.prototype, "accordion_title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 512,
        nullable: false,
    }),
    __metadata("design:type", String)
], EducationAccordion.prototype, "accordion_title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false,
    }),
    __metadata("design:type", String)
], EducationAccordion.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        nullable: false,
    }),
    __metadata("design:type", String)
], EducationAccordion.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => education_entity_1.Education, education => education.education_accordion, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", education_entity_1.Education)
], EducationAccordion.prototype, "education", void 0);
exports.EducationAccordion = EducationAccordion = __decorate([
    (0, typeorm_1.Entity)()
], EducationAccordion);
//# sourceMappingURL=education-accordion.entity.js.map