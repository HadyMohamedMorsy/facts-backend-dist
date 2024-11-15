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
exports.Statistics = void 0;
const class_validator_1 = require("class-validator");
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
let Statistics = class Statistics extends base_entity_1.Base {
};
exports.Statistics = Statistics;
__decorate([
    (0, typeorm_1.Column)({
        unique: true,
        type: "int",
        nullable: true,
    }),
    __metadata("design:type", Number)
], Statistics.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Statistics.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Statistics.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int" }),
    __metadata("design:type", String)
], Statistics.prototype, "value", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(1024),
    (0, typeorm_1.Column)({
        type: "varchar",
        length: 1024,
    }),
    __metadata("design:type", String)
], Statistics.prototype, "icon", void 0);
exports.Statistics = Statistics = __decorate([
    (0, typeorm_1.Entity)()
], Statistics);
//# sourceMappingURL=statistics.entity.js.map