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
exports.Magazine = void 0;
const blog_entity_1 = require("../blogs/blog.entity");
const category_entity_1 = require("../categories/category.entity");
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
let Magazine = class Magazine extends base_entity_1.Base {
};
exports.Magazine = Magazine;
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Magazine.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Magazine.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 512, unique: true }),
    __metadata("design:type", String)
], Magazine.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1024 }),
    __metadata("design:type", String)
], Magazine.prototype, "short_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1024 }),
    __metadata("design:type", String)
], Magazine.prototype, "short_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Magazine.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: true }),
    __metadata("design:type", String)
], Magazine.prototype, "publication_date", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", Array)
], Magazine.prototype, "selectedCategories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => category_entity_1.Category, category => category.magazines, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Magazine.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => blog_entity_1.Blog, blog => blog.magazine, {
        eager: true,
    }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Magazine.prototype, "blogs", void 0);
exports.Magazine = Magazine = __decorate([
    (0, typeorm_1.Entity)()
], Magazine);
//# sourceMappingURL=magazine.entity.js.map