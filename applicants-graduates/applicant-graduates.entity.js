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
exports.ApplicantGraduates = void 0;
const graduates_entity_1 = require("../graduates/graduates.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let ApplicantGraduates = class ApplicantGraduates {
};
exports.ApplicantGraduates = ApplicantGraduates;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ApplicantGraduates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "created_by" }),
    __metadata("design:type", user_entity_1.User)
], ApplicantGraduates.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => graduates_entity_1.Graduates, graduate => graduate.applications, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", graduates_entity_1.Graduates)
], ApplicantGraduates.prototype, "graduate", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: false,
    }),
    __metadata("design:type", Boolean)
], ApplicantGraduates.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], ApplicantGraduates.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], ApplicantGraduates.prototype, "updated_at", void 0);
exports.ApplicantGraduates = ApplicantGraduates = __decorate([
    (0, typeorm_1.Entity)()
], ApplicantGraduates);
//# sourceMappingURL=applicant-graduates.entity.js.map