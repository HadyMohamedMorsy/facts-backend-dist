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
exports.Profile = void 0;
const enum_1 = require("../users/enum/enum");
const user_entity_1 = require("../users/user.entity");
const typeorm_1 = require("typeorm");
let Profile = class Profile {
};
exports.Profile = Profile;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    (0, typeorm_1.JoinColumn)({ name: "created_by" }),
    __metadata("design:type", user_entity_1.User)
], Profile.prototype, "created_by", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], Profile.prototype, "first_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], Profile.prototype, "last_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 3 }),
    __metadata("design:type", String)
], Profile.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enum_1.Gender,
        default: enum_1.Gender.MALE,
    }),
    __metadata("design:type", String)
], Profile.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 12 }),
    __metadata("design:type", String)
], Profile.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 12 }),
    __metadata("design:type", String)
], Profile.prototype, "experience", void 0);
__decorate([
    (0, typeorm_1.Column)("simple-array"),
    __metadata("design:type", Array)
], Profile.prototype, "skills", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "facebook", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "achievements", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "attachment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Profile.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Profile.prototype, "updatedAt", void 0);
exports.Profile = Profile = __decorate([
    (0, typeorm_1.Entity)()
], Profile);
//# sourceMappingURL=profile.entity.js.map