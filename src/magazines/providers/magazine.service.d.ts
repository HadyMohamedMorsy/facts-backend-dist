import { Request } from "express";
import { BlogService } from "src/blogs/providers/blog.service";
import { CategoryService } from "src/categories/providers/category.service";
import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { FilterDataProvider } from "../../shared/common/filter/providers/filter-data.provider";
import { CreateMagazineDto } from "../dto/create-magazine.dto";
import { Magazine } from "../magazine.entity";
export declare class MagazineService extends BaseService<Magazine, CreateMagazineDto> {
    private readonly blogService;
    private readonly categoryService;
    constructor(repository: Repository<Magazine>, filterData: FilterDataProvider<Magazine>, usersService: UserService, blogService: BlogService, categoryService: CategoryService);
    findBySlug(slug: string): Promise<{
        data: Magazine;
    }>;
    front(filter: FilterQueryDto): Promise<{
        data: Magazine[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Magazine[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    deleteMagazineRelations(entity: Magazine, request: Request): Promise<void>;
    findBySlugWithPaginatedBlogs(filter: FilterQueryDto): Promise<{
        data: import("../../blogs/blog.entity").Blog[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
