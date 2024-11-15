import { Request } from "express";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateUserDto } from "./dtos/create-user.dto";
import { PatchUserDto } from "./dtos/patch-user.dto";
import { UserService } from "./providers/user.service";
export declare class UserController {
    private readonly userService;
    private readonly transform;
    constructor(userService: UserService, transform: TransformRequest);
    front(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./user.entity").User[];
    }>;
    getUser(email: string): Promise<import("./user.entity").User>;
    index(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./user.entity").User[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    createUsers(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    updateUsers(updateUserDto: PatchUserDto, request: Request): Promise<import("./user.entity").User>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
