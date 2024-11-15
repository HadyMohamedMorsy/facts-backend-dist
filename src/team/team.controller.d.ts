import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateTeamDto } from "./dtos/create-team.dto";
import { TeamService } from "./providers/team.service";
export declare class TeamController extends BaseController<CreateTeamDto> {
    private readonly teamService;
    private readonly TransformRequest;
    constructor(teamService: TeamService, TransformRequest: TransformRequest);
}
