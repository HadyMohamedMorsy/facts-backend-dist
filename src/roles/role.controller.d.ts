import { RoleService } from "./providers/role.service";
export declare class RoleController {
    private readonly roleService;
    constructor(roleService: RoleService);
    index(): Promise<{
        data: import("./role.entity").Role[];
    }>;
}
