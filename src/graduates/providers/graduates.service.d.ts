import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateGraduatestDto } from "../dtos/create-graduates";
import { Graduates } from "../graduates.entity";
export declare class GraduatesService extends BaseService<Graduates, CreateGraduatestDto> {
    constructor(repository: Repository<Graduates>, filterData: FilterDataProvider<Graduates>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Graduates[];
    }>;
    findBySlug(slug: string): Promise<{
        data: Graduates;
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Graduates[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
