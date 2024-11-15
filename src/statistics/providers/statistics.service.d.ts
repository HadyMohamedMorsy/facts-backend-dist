import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateStatisticsDto } from "../dtos/create-statistics.dto";
import { Statistics } from "../statistics.entity";
export declare class StatisticsService extends BaseService<Statistics, CreateStatisticsDto> {
    constructor(repository: Repository<Statistics>, filterData: FilterDataProvider<Statistics>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Statistics[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Statistics[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
