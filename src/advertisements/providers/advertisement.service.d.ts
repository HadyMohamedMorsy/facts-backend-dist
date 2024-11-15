import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { Advertisement } from "../advertisement.entity";
import { CreatAdvertisementDto } from "../dtos/create-advertisements.dto";
export declare class AdvertisementService extends BaseService<Advertisement, CreatAdvertisementDto> {
    constructor(repository: Repository<Advertisement>, filterData: FilterDataProvider<Advertisement>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Advertisement[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Advertisement[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
