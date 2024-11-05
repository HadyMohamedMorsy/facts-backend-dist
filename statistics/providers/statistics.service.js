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
exports.StatisticsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const base_service_1 = require("../../shared/common/base/base.service");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const user_service_1 = require("../../users/providers/user.service");
const typeorm_2 = require("typeorm");
const statistics_entity_1 = require("../statistics.entity");
let StatisticsService = class StatisticsService extends base_service_1.BaseService {
    constructor(repository, filterData, usersService) {
        super(repository, filterData, usersService);
    }
    async front(filter) {
        const entity = await this.filtersFront(filter, "statistics")
            .filterByActive()
            .orderByOrder()
            .execute();
        return {
            data: entity,
        };
    }
    async findAll(filter) {
        const entity = await this.filters(filter, "statistics")
            .provideFields(["icon"])
            .orderByOrder()
            .execute();
        const result = await this.filters(filter, "statistics").count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
};
exports.StatisticsService = StatisticsService;
exports.StatisticsService = StatisticsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(statistics_entity_1.Statistics)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider,
        user_service_1.UserService])
], StatisticsService);
//# sourceMappingURL=statistics.service.js.map