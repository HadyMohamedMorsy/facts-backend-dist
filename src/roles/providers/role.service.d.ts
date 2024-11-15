import { Repository } from "typeorm";
import { Role } from "../role.entity";
export declare class RoleService {
    private readonly repository;
    constructor(repository: Repository<Role>);
    findAll(): Promise<{
        data: Role[];
    }>;
    findOneById(id: number): Promise<any>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
