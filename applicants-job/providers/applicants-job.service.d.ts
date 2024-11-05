import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { ApplicantJob } from "../applicant-job.entity";
import { CreateApplicantJobstDto } from "../dtos/create-applicants-job";
export declare class ApplicantJobsService extends BaseService<ApplicantJob, CreateApplicantJobstDto> {
    constructor(repository: Repository<ApplicantJob>, filterData: FilterDataProvider<ApplicantJob>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: ApplicantJob[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: ApplicantJob[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
