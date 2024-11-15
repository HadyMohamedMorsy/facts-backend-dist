import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateEducationsDto } from "../dtos/create-educations.dto";
import { Education } from "../education.entity";
export declare class EducationService extends BaseService<Education, CreateEducationsDto> {
    constructor(repository: Repository<Education>, filterData: FilterDataProvider<Education>, usersService: UserService);
    findBySlug(slug: string): Promise<{
        data: Education;
    }>;
    front(filter: FilterQueryDto): Promise<{
        data: Education[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Education[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
