import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateServiceDto } from "../dto/service.dto";
import { Service } from "../service.entity";
export declare class ServiceService extends BaseService<Service, CreateServiceDto> {
    constructor(repository: Repository<Service>, filterData: FilterDataProvider<Service>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Service[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Service[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
