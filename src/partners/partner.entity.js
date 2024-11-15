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
exports.Partner = void 0;
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
let Partner = class Partner extends base_entity_1.Base {
};
exports.Partner = Partner;
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 256,
    }),
    __metadata("design:type", String)
], Partner.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 256,
    }),
    __metadata("design:type", String)
], Partner.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 256,
    }),
    __metadata("design:type", String)
], Partner.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
    }),
    __metadata("design:type", String)
], Partner.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
    }),
    __metadata("design:type", String)
], Partner.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "text",
    }),
    __metadata("design:type", String)
], Partner.prototype, "featuredImage", void 0);
exports.Partner = Partner = __decorate([
    (0, typeorm_1.Entity)()
], Partner);
//# sourceMappingURL=partner.entity.js.map