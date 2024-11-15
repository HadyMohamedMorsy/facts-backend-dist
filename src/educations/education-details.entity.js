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
exports.EducationDetails = void 0;
const base_time_entity_1 = require("../shared/common/base/entity/base-time.entity");
const typeorm_1 = require("typeorm");
const education_entity_1 = require("./education.entity");
let EducationDetails = class EducationDetails extends base_time_entity_1.BaseTime {
};
exports.EducationDetails = EducationDetails;
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], EducationDetails.prototype, "name_en", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], EducationDetails.prototype, "name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], EducationDetails.prototype, "value_en", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], EducationDetails.prototype, "value_ar", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => education_entity_1.Education, education => education.education_accordion, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", education_entity_1.Education)
], EducationDetails.prototype, "education", void 0);
exports.EducationDetails = EducationDetails = __decorate([
    (0, typeorm_1.Entity)()
], EducationDetails);
//# sourceMappingURL=education-details.entity.js.map