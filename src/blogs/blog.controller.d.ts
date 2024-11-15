import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateBlogsDto } from "./dto/create-blogs-blogs.dto";
import { BlogService } from "./providers/blog.service";
export declare class BlogController extends BaseController<CreateBlogsDto> {
    private readonly blogService;
    private readonly transformRequest;
    constructor(blogService: BlogService, transformRequest: TransformRequest);
    findBySlug(slug: string): Promise<{
        data: import("./blog.entity").Blog;
    }>;
}
