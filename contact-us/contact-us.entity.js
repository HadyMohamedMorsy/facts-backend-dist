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
exports.Contact = void 0;
const typeorm_1 = require("typeorm");
let Contact = class Contact {
};
exports.Contact = Contact;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Contact.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
        unique: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 512,
    }),
    __metadata("design:type", String)
], Contact.prototype, "full_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 256,
    }),
    __metadata("design:type", String)
], Contact.prototype, "subject", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        unique: true,
    }),
    __metadata("design:type", String)
], Contact.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
    }),
    __metadata("design:type", String)
], Contact.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], Contact.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: "timestamp",
        default: () => "CURRENT_TIMESTAMP",
        onUpdate: "CURRENT_TIMESTAMP",
    }),
    __metadata("design:type", Date)
], Contact.prototype, "updated_at", void 0);
exports.Contact = Contact = __decorate([
    (0, typeorm_1.Entity)()
], Contact);
//# sourceMappingURL=contact-us.entity.js.map