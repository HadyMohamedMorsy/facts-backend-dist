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
exports.ContactUsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const typeorm_2 = require("typeorm");
const contact_us_entity_1 = require("../contact-us.entity");
let ContactUsService = class ContactUsService {
    constructor(repository, filterData) {
        this.repository = repository;
        this.filterData = filterData;
    }
    async findAll(filter) {
        const entity = await this.filterData
            .initRepositry("contact", this.repository, filter)
            .filter()
            .sort()
            .paginate()
            .search()
            .execute();
        const result = await this.filterData.initRepositry("contact", this.repository, filter).count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
    async create(createDto) {
        const entity = this.repository.create(createDto);
        return this.repository.save(entity);
    }
    async delete(id) {
        await this.repository.delete(id);
        return { deleted: true, id };
    }
};
exports.ContactUsService = ContactUsService;
exports.ContactUsService = ContactUsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(contact_us_entity_1.Contact)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider])
], ContactUsService);
//# sourceMappingURL=contact-us.service.js.map