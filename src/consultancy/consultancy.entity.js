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
exports.Consultancy = void 0;
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
const consultancy_accordion_entity_1 = require("./consultancy-accordion.entity");
let Consultancy = class Consultancy extends base_entity_1.Base {
};
exports.Consultancy = Consultancy;
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Consultancy.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Consultancy.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512 }),
    __metadata("design:type", String)
], Consultancy.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultancy.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultancy.prototype, "short_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Consultancy.prototype, "short_description_ar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => consultancy_accordion_entity_1.ConsultancyAccordion, consultancyAccordion => consultancyAccordion.consultancy, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Consultancy.prototype, "consultancy_accordion", void 0);
exports.Consultancy = Consultancy = __decorate([
    (0, typeorm_1.Entity)()
], Consultancy);
//# sourceMappingURL=consultancy.entity.js.map