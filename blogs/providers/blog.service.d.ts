import { BaseService } from "src/shared/common/base/base.service";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { UserService } from "src/users/providers/user.service";
import { Repository } from "typeorm";
import { Blog } from "../blog.entity";
import { CreateBlogsDto } from "../dto/create-blogs-blogs.dto";
export declare class BlogService extends BaseService<Blog, CreateBlogsDto> {
    constructor(repository: Repository<Blog>, filterData: FilterDataProvider<Blog>, usersService: UserService);
    front(filter: FilterQueryDto): Promise<{
        data: Blog[];
    }>;
    findBySlug(slug: string): Promise<{
        data: Blog;
    }>;
    findAll(filter: FilterQueryDto): Promise<{
        data: Blog[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    findBySlugWithPaginatedBlogs(magazine: any, filter: FilterQueryDto): Promise<{
        data: Blog[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
