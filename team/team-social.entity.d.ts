import { BaseTime } from "src/shared/common/base/entity/base-time.entity";
import { Team } from "./team.entity";
export declare class TeamSocial extends BaseTime {
    icon: string;
    link: string;
    team: Team;
}
