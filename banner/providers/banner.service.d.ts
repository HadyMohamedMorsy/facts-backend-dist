import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { Banner } from "../banner.entity";
import { CreateBannerDto } from "../dtos/create-banner.dto";
export declare class BannerService extends BaseService<Banner, CreateBannerDto> {
    constructor(repository: Repository<Banner>, filterData: FilterDataProvider<Banner>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Banner[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Banner[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
