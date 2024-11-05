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
exports.PatchGraduates = void 0;
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
let PatchGraduates = class PatchGraduates extends base_entity_1.Base {
};
exports.PatchGraduates = PatchGraduates;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], PatchGraduates.prototype, "name_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], PatchGraduates.prototype, "name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 5 }),
    __metadata("design:type", String)
], PatchGraduates.prototype, "year", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PatchGraduates.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], PatchGraduates.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], PatchGraduates.prototype, "files", void 0);
exports.PatchGraduates = PatchGraduates = __decorate([
    (0, typeorm_1.Entity)()
], PatchGraduates);
//# sourceMappingURL=patch.entity.js.map