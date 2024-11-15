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
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
const filter_data_provider_1 = require("../filter/providers/filter-data.provider");
const utilits_1 = require("../../helpers/utilits");
const typeorm_1 = require("typeorm");
const user_service_1 = require("../../../users/providers/user.service");
let BaseService = class BaseService {
    constructor(repository, filterData, usersService) {
        this.repository = repository;
        this.filterData = filterData;
        this.usersService = usersService;
    }
    async findOne(id, relations = []) {
        let entity = undefined;
        if (relations.length) {
            entity = await this.repository.findOne({
                where: { id },
                relations,
            });
        }
        else {
            entity = await this.repository.findOne({
                where: { id },
            });
        }
        if (!entity) {
            throw new common_1.NotFoundException(`Record with ID ${id} not found`);
        }
        return entity;
    }
    async create(createDto, relations) {
        const entity = this.repository.create(createDto);
        await this.repository.save(entity);
        const result = await this.repository.findOne({
            where: { id: +entity.id },
            relations,
        });
        if (!result) {
            throw new common_1.NotFoundException(`Entity with ID ${entity.id} not found`);
        }
        return result;
    }
    async update(updateDto, relations) {
        const updateEntity = await this.repository.save(updateDto);
        const result = await this.repository.findOne({
            where: { id: updateEntity.id },
            relations,
        });
        if (!result) {
            throw new common_1.NotFoundException(`Entity with ID ${updateEntity.id} not found`);
        }
        return result;
    }
    filters(filter, entityType) {
        const entity = this.filterData
            .initRepositry(entityType, this.repository, filter)
            .filter()
            .sort()
            .paginate()
            .joinRelations("created_by", ["email"])
            .search()
            .searchRelations();
        return entity;
    }
    filtersFront(filter, entityType) {
        const entity = this.filterData
            .initRepositry(entityType, this.repository, filter)
            .paginate()
            .filterByActive();
        return entity;
    }
    async delete(id, request) {
        const record = await this.repository.findOne({ where: { id } });
        if (!record) {
            throw new common_1.NotFoundException(`Record with id ${id} not found`);
        }
        const keysToCheck = [
            "featuredImage",
            "files",
            "thumbnail",
            "attachment",
        ];
        try {
            for (const key of keysToCheck) {
                const fileOrFiles = record[key];
                if (fileOrFiles) {
                    if (Array.isArray(fileOrFiles)) {
                        for (const file of fileOrFiles) {
                            (0, utilits_1.deleteFile)(file, request);
                        }
                    }
                    else {
                        (0, utilits_1.deleteFile)(fileOrFiles, request);
                    }
                }
            }
        }
        catch (error) {
            console.error(`Error deleting files: ${error.message}`);
            throw new common_1.NotFoundException(`Failed to delete associated files for record with id ${id}`);
        }
        await this.repository.delete(id);
        return { data: null };
    }
};
exports.BaseService = BaseService;
exports.BaseService = BaseService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        filter_data_provider_1.FilterDataProvider,
        user_service_1.UserService])
], BaseService);
//# sourceMappingURL=base.service.js.map