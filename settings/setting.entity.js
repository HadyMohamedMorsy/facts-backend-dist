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
exports.Settings = void 0;
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
let Settings = class Settings extends base_entity_1.Base {
};
exports.Settings = Settings;
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "section_name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512, unique: true }),
    __metadata("design:type", String)
], Settings.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "short_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "short_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1024, nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Settings.prototype, "screen_shot", void 0);
exports.Settings = Settings = __decorate([
    (0, typeorm_1.Entity)()
], Settings);
//# sourceMappingURL=setting.entity.js.map