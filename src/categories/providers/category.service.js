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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blog_service_1 = require("../../blogs/providers/blog.service");
const magazine_service_1 = require("../../magazines/providers/magazine.service");
const base_service_1 = require("../../shared/common/base/base.service");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const user_service_1 = require("../../users/providers/user.service");
const typeorm_2 = require("typeorm");
const category_entity_1 = require("../category.entity");
let CategoryService = class CategoryService extends base_service_1.BaseService {
    constructor(repository, filterData, usersService, blogService, magazineService) {
        super(repository, filterData, usersService);
        this.blogService = blogService;
        this.magazineService = magazineService;
    }
    async front(filter) {
        const entity = await this.filtersFront(filter, "category")
            .joinInnerRelations("magazines", ["title_ar", "title_en"])
            .filterByActive()
            .orderByOrder()
            .execute();
        return {
            data: entity,
        };
    }
    async autoComplete(filter) {
        const entity = await this.filtersFront(filter, "category")
            .searchFrontOnly(filter.search, ["name_en", "name_ar"])
            .filterByActive()
            .orderByOrder()
            .execute();
        return {
            data: entity,
        };
    }
    async findMultipleCategories(categories) {
        const results = await this.repository.find({
            where: {
                id: (0, typeorm_2.In)(categories),
                is_active: true,
            },
        });
        return results;
    }
    async findAll(filter) {
        const entity = await this.filters(filter, "category").orderByOrder().execute();
        const result = await this.filters(filter, "category").count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
    async deleteCategoriesRelations(entity, request) {
        if (!entity) {
            throw new common_1.NotFoundException("Magazine not found");
        }
        if (entity.magazines && entity.magazines.length > 0) {
            for (const magazine of entity.magazines) {
                for (const blog of magazine.blogs) {
                    await this.blogService.delete(blog.id, request);
                }
            }
        }
        if (entity.magazines && entity.magazines.length > 0) {
            for (const magazine of entity.magazines) {
                await this.magazineService.delete(magazine.id, request);
            }
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_entity_1.Category)),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => magazine_service_1.MagazineService))),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider,
        user_service_1.UserService,
        blog_service_1.BlogService,
        magazine_service_1.MagazineService])
], CategoryService);
//# sourceMappingURL=category.service.js.map