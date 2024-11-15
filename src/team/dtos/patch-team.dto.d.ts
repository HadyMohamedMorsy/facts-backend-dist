import { CreateTeamDto } from "./create-team.dto";
declare const PatchTeamDto_base: import("@nestjs/common").Type<Partial<CreateTeamDto>>;
export declare class PatchTeamDto extends PatchTeamDto_base {
    id: number;
}
export {};
