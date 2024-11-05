import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateSettingDto } from "../dtos/create-setting.dto";
import { Settings } from "../setting.entity";
export declare class SettingsService extends BaseService<Settings, CreateSettingDto> {
    constructor(repository: Repository<Settings>, filterData: FilterDataProvider<Settings>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Settings[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Settings[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
