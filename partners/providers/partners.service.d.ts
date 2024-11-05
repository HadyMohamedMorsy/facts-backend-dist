import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreatePartnersDto } from "../dtos/create-partners.dto";
import { Partner } from "../partner.entity";
export declare class PartnersService extends BaseService<Partner, CreatePartnersDto> {
    constructor(repository: Repository<Partner>, filterData: FilterDataProvider<Partner>, usersService: UserService);
    findAll(filter: FilterQueryDto): Promise<{
        data: Partner[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    front(filter: FilterQueryDto): Promise<{
        data: Partner[];
    }>;
}
