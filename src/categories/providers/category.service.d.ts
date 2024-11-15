import { Request } from "express";
import { BlogService } from "src/blogs/providers/blog.service";
import { MagazineService } from "src/magazines/providers/magazine.service";
import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { Category } from "../category.entity";
import { CreateCategoryDto } from "../dto/create-category.dto";
export declare class CategoryService extends BaseService<Category, CreateCategoryDto> {
    private readonly blogService;
    private readonly magazineService;
    constructor(repository: Repository<Category>, filterData: FilterDataProvider<Category>, usersService: UserService, blogService: BlogService, magazineService: MagazineService);
    front(filter: FilterQueryDto): Promise<{
        data: Category[];
    }>;
    autoComplete(filter: FilterQueryDto): Promise<{
        data: Category[];
    }>;
    findMultipleCategories(categories: number[]): Promise<Category[]>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Category[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    deleteCategoriesRelations(entity: Category, request: Request): Promise<void>;
}
