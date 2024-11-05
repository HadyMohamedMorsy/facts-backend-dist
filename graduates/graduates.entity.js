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
exports.Graduates = void 0;
const applicant_graduates_entity_1 = require("../applicants-graduates/applicant-graduates.entity");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
const create_graduates_users_dto_1 = require("./dtos/create-graduates-users.dto");
let Graduates = class Graduates {
};
exports.Graduates = Graduates;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Graduates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: true,
    }),
    __metadata("design:type", Boolean)
], Graduates.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", create_graduates_users_dto_1.createUserGraduatesDto)
], Graduates.prototype, "selectUser", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => applicant_graduates_entity_1.ApplicantGraduates, application => application.graduate, {
        cascade: true,
        onDelete: "CASCADE",
    }),
    __metadata("design:type", Array)
], Graduates.prototype, "applications", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", user_entity_1.User)
], Graduates.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Graduates.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512, unique: true }),
    __metadata("design:type", String)
], Graduates.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], Graduates.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "course_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "code_certification", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], Graduates.prototype, "date_course", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "attachment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar" }),
    __metadata("design:type", String)
], Graduates.prototype, "image_certification", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Graduates.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Graduates.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "created_by" }),
    __metadata("design:type", user_entity_1.User)
], Graduates.prototype, "created_by", void 0);
exports.Graduates = Graduates = __decorate([
    (0, typeorm_1.Entity)()
], Graduates);
//# sourceMappingURL=graduates.entity.js.map