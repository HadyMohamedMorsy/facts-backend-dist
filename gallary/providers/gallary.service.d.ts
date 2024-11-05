import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateGallarysDto } from "../dtos/create-gallary.dto";
import { Gallary } from "../gallary.entity";
export declare class GallaryService extends BaseService<Gallary, CreateGallarysDto> {
    constructor(repository: Repository<Gallary>, filterData: FilterDataProvider<Gallary>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Gallary[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Gallary[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
