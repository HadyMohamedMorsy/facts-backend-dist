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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FilterDataProvider_queryBuilder, _FilterDataProvider_entity, _FilterDataProvider_repository, _FilterDataProvider_filterData, _FilterDataProvider_totalRecords, _FilterDataProvider_selectMap;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilterDataProvider = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const typeorm_1 = require("typeorm");
let FilterDataProvider = class FilterDataProvider {
    constructor(request) {
        this.request = request;
        _FilterDataProvider_queryBuilder.set(this, void 0);
        _FilterDataProvider_entity.set(this, void 0);
        _FilterDataProvider_repository.set(this, void 0);
        _FilterDataProvider_filterData.set(this, void 0);
        _FilterDataProvider_totalRecords.set(this, void 0);
        _FilterDataProvider_selectMap.set(this, new Map());
    }
    initRepositry(entity, repository, filterData) {
        __classPrivateFieldSet(this, _FilterDataProvider_repository, repository, "f");
        __classPrivateFieldSet(this, _FilterDataProvider_filterData, filterData, "f");
        __classPrivateFieldSet(this, _FilterDataProvider_queryBuilder, __classPrivateFieldGet(this, _FilterDataProvider_repository, "f").createQueryBuilder((__classPrivateFieldSet(this, _FilterDataProvider_entity, entity, "f"))), "f");
        return this;
    }
    getRelatedFieldsLang(fieldName) {
        const suffix = fieldName.endsWith("_en") ? "_ar" : "_en";
        return `${fieldName.slice(0, -3)}${suffix}`;
    }
    filter() {
        if (!__classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").columns || !__classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").columns.length) {
            throw new Error("Columns for selection are required.");
        }
        const fields = __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").columns.flatMap(column => {
            const mainEntityName = column.name.includes(".") ? column.name.split(".")[0] : column.name;
            const fieldName = `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${mainEntityName}`;
            if (mainEntityName.endsWith("_en") || mainEntityName.endsWith("_ar")) {
                const relatedFieldName = `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${this.getRelatedFieldsLang(mainEntityName)}`;
                return [fieldName, relatedFieldName];
            }
            return [fieldName];
        });
        __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").select(fields);
        return this;
    }
    provideFields(providers) {
        if (providers.length) {
            const fields = providers.map(field => `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${field}`);
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addSelect(fields);
        }
        return this;
    }
    searchFrontOnly(searchString, fields) {
        if (searchString && fields.length > 0) {
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(new typeorm_1.Brackets(qb => {
                fields.forEach(field => {
                    qb.orWhere(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${field} LIKE :searchString`, {
                        searchString: `%${searchString}%`,
                    });
                });
            }));
        }
        return this;
    }
    sort() {
        if (__classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").order && __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").order.length) {
            __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").order.forEach(({ column, dir }) => {
                const columnName = __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f").columns.filter(coulmn => !coulmn.name.includes("."))[column]?.name;
                if (columnName) {
                    __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addOrderBy(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${columnName}`, dir);
                }
            });
        }
        else {
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addOrderBy(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.createdAt`, "DESC");
        }
        return this;
    }
    count() {
        __classPrivateFieldSet(this, _FilterDataProvider_totalRecords, __classPrivateFieldGet(this, _FilterDataProvider_repository, "f").count(), "f");
        return __classPrivateFieldGet(this, _FilterDataProvider_totalRecords, "f");
    }
    paginate() {
        const { start, length } = __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f");
        __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").skip(start).take(length);
        return this;
    }
    search() {
        const { search, columns } = __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f");
        if (search && columns.some(c => c.searchable)) {
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(new typeorm_1.Brackets(qb => {
                columns
                    .filter(c => c.searchable && !c.name.includes("."))
                    .forEach(column => {
                    qb.orWhere(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${column.name} LIKE :search`, {
                        search: `%${search}%`,
                    });
                });
            }));
        }
        return this;
    }
    excludeFields(entity, fields) {
        __classPrivateFieldGet(this, _FilterDataProvider_selectMap, "f").set(entity, fields);
        return this;
    }
    joinRelations(relation, fields) {
        if (relation) {
            const relationAlias = `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}_${relation}`;
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").leftJoin(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${relation}`, relationAlias);
            fields.forEach(field => {
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addSelect(`${relationAlias}.${field}`);
            });
        }
        return this;
    }
    searchFrontRelation(searchRel) {
        Object.entries(searchRel).forEach(([fieldPath, searchValue]) => {
            if (searchValue) {
                const [relationAlias, field] = fieldPath.includes(".")
                    ? [
                        `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}_${fieldPath.split(".")[0].replace(".", "_")}`,
                        fieldPath.split(".")[1],
                    ]
                    : [__classPrivateFieldGet(this, _FilterDataProvider_entity, "f"), fieldPath];
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(`${relationAlias}.${field} LIKE :search`, {
                    search: `%${searchValue}%`,
                });
            }
        });
        return this;
    }
    searchRelations() {
        const { search, columns } = __classPrivateFieldGet(this, _FilterDataProvider_filterData, "f");
        if (search && columns.some(c => c.searchable && c.name.includes("."))) {
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(new typeorm_1.Brackets(qb => {
                columns
                    .filter(c => c.searchable && c.name.includes("."))
                    .forEach(column => {
                    const [relationName, fieldName] = column.name.split(".");
                    const relationAlias = `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}_${relationName}`;
                    qb.orWhere(`${relationAlias}.${fieldName} LIKE :search`, {
                        search: `%${search}%`,
                    });
                });
            }));
        }
        return this;
    }
    dynamicFilter(filters) {
        Object.keys(filters).forEach(key => {
            const value = filters[key].value;
            if (!value)
                return this;
            if (filters[key].type === "where") {
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${key} = :value`, { value });
            }
            else if (filters[key].type === "search") {
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(`${key} LIKE :searchTerm`, { searchTerm: value });
            }
        });
        return this;
    }
    joinInnerRelations(relation, fields) {
        if (relation) {
            const relationAlias = `${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}_${relation}`;
            __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").innerJoin(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${relation}`, relationAlias);
            fields?.forEach(field => {
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addSelect(`${relationAlias}.${field}`);
            });
        }
        return this;
    }
    filterByActive() {
        __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").andWhere(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.is_active = :isActive`, { isActive: true });
        return this;
    }
    orderByOrder(direction = "ASC") {
        __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addOrderBy(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.order`, direction);
        return this;
    }
    joinRelatedEntitiesById(relationName, relationEntityField, id, fields) {
        if (!id)
            return this;
        const uniqueAlias = `${relationName}_${id}`;
        __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").innerJoinAndSelect(`${__classPrivateFieldGet(this, _FilterDataProvider_entity, "f")}.${relationName}`, uniqueAlias, `${uniqueAlias}.${relationEntityField} = :id`, { id });
        if (fields) {
            fields.forEach(field => {
                __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").addSelect(`${uniqueAlias}.${field}`);
            });
        }
        return this;
    }
    async execute() {
        return __classPrivateFieldGet(this, _FilterDataProvider_queryBuilder, "f").getMany();
    }
};
exports.FilterDataProvider = FilterDataProvider;
_FilterDataProvider_queryBuilder = new WeakMap();
_FilterDataProvider_entity = new WeakMap();
_FilterDataProvider_repository = new WeakMap();
_FilterDataProvider_filterData = new WeakMap();
_FilterDataProvider_totalRecords = new WeakMap();
_FilterDataProvider_selectMap = new WeakMap();
exports.FilterDataProvider = FilterDataProvider = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(core_1.REQUEST)),
    __metadata("design:paramtypes", [Request])
], FilterDataProvider);
//# sourceMappingURL=filter-data.provider.js.map