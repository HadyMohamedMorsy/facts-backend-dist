import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreatePatchDto } from "../dtos/create-patch.dto";
import { PatchGraduates } from "../patch.entity";
export declare class PatchService extends BaseService<PatchGraduates, CreatePatchDto> {
    constructor(repository: Repository<PatchGraduates>, filterData: FilterDataProvider<PatchGraduates>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: PatchGraduates[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: PatchGraduates[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
