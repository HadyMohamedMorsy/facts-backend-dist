import { HashingProvider } from "src/auth/providers/hashing.provider";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dtos/create-user.dto";
import { PatchUserDto } from "../dtos/patch-user.dto";
import { User } from "../user.entity";
export declare class UserService {
    private readonly hashingProvider;
    private readonly repository;
    private readonly filterData;
    private readonly transform;
    constructor(hashingProvider: HashingProvider, repository: Repository<User>, filterData: FilterDataProvider<User>, transform: TransformRequest);
    findAll(filter: FilterQueryDto): Promise<{
        data: User[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    front(filter: FilterQueryDto): Promise<{
        data: User[];
    }>;
    filtersFront(filter: FilterQueryDto, entityType: string): FilterDataProvider<User>;
    findOneById(id: number): Promise<any>;
    findOneByEmail(email: string): Promise<User>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
    updateUser(patch: PatchUserDto): Promise<User>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
