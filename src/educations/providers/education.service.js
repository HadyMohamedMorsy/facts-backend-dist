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
exports.EducationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const base_service_1 = require("../../shared/common/base/base.service");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const user_service_1 = require("../../users/providers/user.service");
const typeorm_2 = require("typeorm");
const education_entity_1 = require("../education.entity");
let EducationService = class EducationService extends base_service_1.BaseService {
    constructor(repository, filterData, usersService) {
        super(repository, filterData, usersService);
    }
    async findBySlug(slug) {
        const education = await this.repository.findOne({
            where: { slug },
            relations: ["education_accordion", "education_details"],
        });
        if (!education) {
            throw new common_1.NotFoundException(`Education with slug '${slug}' not found`);
        }
        return {
            data: education,
        };
    }
    async front(filter) {
        const entity = await this.filtersFront(filter, "education")
            .filterByActive()
            .orderByOrder()
            .execute();
        return {
            data: entity,
        };
    }
    async findAll(filter) {
        const entity = await this.filters(filter, "education")
            .joinRelations("education_accordion", [
            "accordion_title_en",
            "accordion_title_ar",
            "description_en",
            "description_ar",
        ])
            .joinRelations("education_details", ["name_en", "name_ar", "value_en", "value_ar"])
            .provideFields([
            "featuredImage",
            "short_description_en",
            "short_description_ar",
            "intro_description_en",
            "intro_description_ar",
            "thumbnail",
        ])
            .orderByOrder()
            .execute();
        const result = await this.filters(filter, "education").count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
};
exports.EducationService = EducationService;
exports.EducationService = EducationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(education_entity_1.Education)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider,
        user_service_1.UserService])
], EducationService);
//# sourceMappingURL=education.service.js.map