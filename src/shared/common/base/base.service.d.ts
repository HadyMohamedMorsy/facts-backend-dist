import { Request } from "express";
import { IBaseService } from "src/shared/common/base/service.types";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { DeepPartial, Repository } from "typeorm";
import { UserService } from "../../../users/providers/user.service";
interface BaseEntity {
    id: number;
    featuredImage?: string;
    files?: string[];
    thumbnail?: string;
    attachment?: string;
}
export declare abstract class BaseService<T extends BaseEntity, CreateDto> implements IBaseService<CreateDto> {
    protected readonly repository: Repository<T>;
    protected readonly filterData: FilterDataProvider<T>;
    private readonly usersService;
    constructor(repository: Repository<T>, filterData: FilterDataProvider<T>, usersService: UserService);
    abstract front(filter: FilterQueryDto): Promise<any>;
    abstract findAll(filter: FilterQueryDto): Promise<any>;
    findOne(id: number, relations?: string[]): Promise<T>;
    create(createDto: CreateDto, relations: string[]): Promise<T>;
    update(updateDto: DeepPartial<T>, relations: string[]): Promise<T>;
    filters(filter: FilterQueryDto, entityType: string): FilterDataProvider<T>;
    filtersFront(filter: FilterQueryDto, entityType: string): FilterDataProvider<T>;
    delete(id: number, request: Request): Promise<{
        data: any;
    }>;
}
export {};
