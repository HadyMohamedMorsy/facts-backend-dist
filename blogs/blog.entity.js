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
exports.Blog = void 0;
const magazine_entity_1 = require("../magazines/magazine.entity");
const base_entity_1 = require("../shared/common/base/entity/base.entity");
const typeorm_1 = require("typeorm");
const create_magazine_blog_dto_1 = require("./dto/create-magazine-blog.dto");
let Blog = class Blog extends base_entity_1.Base {
};
exports.Blog = Blog;
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Blog.prototype, "title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256 }),
    __metadata("design:type", String)
], Blog.prototype, "title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, unique: true }),
    __metadata("design:type", String)
], Blog.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "meta_title_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 256, nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "meta_title_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "meta_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "meta_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "short_description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text", nullable: true }),
    __metadata("design:type", String)
], Blog.prototype, "short_description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Blog.prototype, "description_en", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Blog.prototype, "description_ar", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Blog.prototype, "featuredImage", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "text" }),
    __metadata("design:type", String)
], Blog.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => magazine_entity_1.Magazine, magazine => magazine.blogs, {
        onDelete: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", magazine_entity_1.Magazine)
], Blog.prototype, "magazine", void 0);
__decorate([
    (0, typeorm_1.Column)("json", { nullable: true }),
    __metadata("design:type", create_magazine_blog_dto_1.createMagazineBlogDto)
], Blog.prototype, "selectMagazine", void 0);
exports.Blog = Blog = __decorate([
    (0, typeorm_1.Entity)()
], Blog);
//# sourceMappingURL=blog.entity.js.map