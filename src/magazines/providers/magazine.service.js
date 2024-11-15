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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazineService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_service_1 = require("../../blogs/providers/blog.service");
const category_service_1 = require("../../categories/providers/category.service");
const base_service_1 = require("../../shared/common/base/base.service");
const user_service_1 = require("../../users/providers/user.service");
const typeorm_2 = require("typeorm");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const magazine_entity_1 = require("../magazine.entity");
let MagazineService = class MagazineService extends base_service_1.BaseService {
    constructor(repository, filterData, usersService, blogService, categoryService) {
        super(repository, filterData, usersService);
        this.blogService = blogService;
        this.categoryService = categoryService;
    }
    async findBySlug(slug) {
        const magazine = await this.repository.findOne({
            where: { slug },
        });
        if (!magazine) {
            throw new common_1.NotFoundException(`Education with slug '${slug}' not found`);
        }
        return {
            data: magazine,
        };
    }
    async front(filter) {
        const entity = await this.filtersFront(filter, "magazine")
            .searchFrontOnly(filter.search, ["title_en", "title_ar"])
            .joinRelations("created_by", ["firstName", "lastName"])
            .joinRelations("categories", ["name_ar", "name_en", "slug"])
            .joinRelatedEntitiesById("categories", "id", filter?.filters?.categoryId)
            .dynamicFilter({
            publication_date: { type: "where", value: filter?.filters?.publication_date },
        })
            .filterByActive()
            .orderByOrder()
            .execute();
        const result = await this.filtersFront(filter, "magazine").count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
    async findAll(filter) {
        const entity = await this.filters(filter, "magazine")
            .joinRelations("categories", ["name_en", "name_ar", "id"])
            .provideFields([
            "featuredImage",
            "selectedCategories",
            "short_description_en",
            "short_description_ar",
            "publication_date",
        ])
            .orderByOrder()
            .execute();
        const result = await this.filters(filter, "magazine").count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
    async deleteMagazineRelations(entity, request) {
        if (!entity) {
            throw new common_1.NotFoundException("Magazine not found");
        }
        if (entity.blogs && entity.blogs.length > 0) {
            for (const blog of entity.blogs) {
                await this.blogService.delete(blog.id, request);
            }
        }
    }
    async findBySlugWithPaginatedBlogs(filter) {
        const magazine = await this.repository.findOne({
            where: {
                slug: filter.filters?.slug,
            },
        });
        if (!magazine) {
            throw new common_1.NotFoundException(`Education with slug '${filter.filters?.slug}' not found`);
        }
        return await this.blogService.findBySlugWithPaginatedBlogs(magazine, filter);
    }
};
exports.MagazineService = MagazineService;
exports.MagazineService = MagazineService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(magazine_entity_1.Magazine)),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => category_service_1.CategoryService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider,
        user_service_1.UserService,
        blog_service_1.BlogService,
        category_service_1.CategoryService])
], MagazineService);
//# sourceMappingURL=magazine.service.js.map