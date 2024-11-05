import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { CreateTeamDto } from "../dtos/create-team.dto";
import { Team } from "../team.entity";
export declare class TeamService extends BaseService<Team, CreateTeamDto> {
    constructor(repository: Repository<Team>, filterData: FilterDataProvider<Team>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Team[];
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Team[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
