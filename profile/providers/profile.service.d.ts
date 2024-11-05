import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateProfiletDto } from "../dtos/create-profile";
import { Profile } from "../profile.entity";
export declare class ProfileService extends BaseService<Profile, CreateProfiletDto> {
    constructor(repository: Repository<Profile>, filterData: FilterDataProvider<Profile>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Profile[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Profile[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
