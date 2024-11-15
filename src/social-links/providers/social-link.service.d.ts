import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateSocialLinkDto } from "../dtos/create-social-link";
import { SocialLink } from "../social-link.entity";
export declare class SocialLinkService extends BaseService<SocialLink, CreateSocialLinkDto> {
    constructor(repository: Repository<SocialLink>, filterData: FilterDataProvider<SocialLink>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: SocialLink[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: SocialLink[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
