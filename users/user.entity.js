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
exports.User = void 0;
const graduates_entity_1 = require("../graduates/graduates.entity");
const role_entity_1 = require("../roles/role.entity");
const typeorm_1 = require("typeorm");
const enum_1 = require("./enum/enum");
let User = class User {
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: false,
    }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "enum",
        enum: enum_1.Gender,
    }),
    __metadata("design:type", String)
], User.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 96,
        nullable: true,
    }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "boolean",
        default: true,
    }),
    __metadata("design:type", Boolean)
], User.prototype, "is_active", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role),
    (0, typeorm_1.JoinColumn)({ name: "role_id" }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => graduates_entity_1.Graduates, graduate => graduate.user),
    __metadata("design:type", graduates_entity_1.Graduates)
], User.prototype, "graduate", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map