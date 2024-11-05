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
exports.Team = void 0;
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
const team_social_entity_1 = require("./team-social.entity");
let Team = class Team extends base_entity_1.Base {
};
exports.Team = Team;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], Team.prototype, "name_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], Team.prototype, "name_ar", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { array: true }),
    __metadata("design:type", Array)
], Team.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Team.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)("text"),
    __metadata("design:type", String)
], Team.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "position_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Team.prototype, "position_ar", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => team_social_entity_1.TeamSocial, social => social.team, {
        cascade: true,
        eager: true,
    }),
    __metadata("design:type", Array)
], Team.prototype, "social_links", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 1024 }),
    __metadata("design:type", String)
], Team.prototype, "featuredImage", void 0);
exports.Team = Team = __decorate([
    (0, typeorm_1.Entity)()
], Team);
//# sourceMappingURL=team.entity.js.map