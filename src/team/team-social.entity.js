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
exports.TeamSocial = void 0;
const base_time_entity_1 = require("../shared/common/base/entity/base-time.entity");
const typeorm_1 = require("typeorm");
const team_entity_1 = require("./team.entity");
let TeamSocial = class TeamSocial extends base_time_entity_1.BaseTime {
};
exports.TeamSocial = TeamSocial;
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], TeamSocial.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 256 }),
    __metadata("design:type", String)
], TeamSocial.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team, team => team.social_links, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", team_entity_1.Team)
], TeamSocial.prototype, "team", void 0);
exports.TeamSocial = TeamSocial = __decorate([
    (0, typeorm_1.Entity)()
], TeamSocial);
//# sourceMappingURL=team-social.entity.js.map