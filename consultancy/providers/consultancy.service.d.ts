import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { Consultancy } from "../consultancy.entity";
import { CreateConsultancyDto } from "../dtos/create-consultancy.dto";
export declare class ConsultancyService extends BaseService<Consultancy, CreateConsultancyDto> {
    constructor(repository: Repository<Consultancy>, filterData: FilterDataProvider<Consultancy>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Consultancy[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Consultancy[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findBySlug(slug: string): Promise<{
        data: Consultancy;
    }>;
}
