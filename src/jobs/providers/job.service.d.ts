import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateJobDto } from "../dtos/create-job.dto";
import { Job } from "../job.entity";
export declare class JobService extends BaseService<Job, CreateJobDto> {
    constructor(repository: Repository<Job>, filterData: FilterDataProvider<Job>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Job[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Job[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
