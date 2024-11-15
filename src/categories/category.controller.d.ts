import { BaseController } from "src/shared/common/base/base.controller";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { CategoryService } from "./providers/category.service";
import { Request } from "express";
export declare class CategoryController extends BaseController<CreateCategoryDto> {
    private readonly categoryService;
    private readonly TransformRequest;
    constructor(categoryService: CategoryService, TransformRequest: TransformRequest);
    autoComplete(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./category.entity").Category[];
    }>;
    delete(body: {
        id: string;
    }, request: Request): Promise<void>;
}
