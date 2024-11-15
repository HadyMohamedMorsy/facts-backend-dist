import { Request } from "express";
import { CategoryService } from "src/categories/providers/category.service";
import { BaseController } from "src/shared/common/base/base.controller";
import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateMagazineDto } from "./dto/create-magazine.dto";
import { MagazineService } from "./providers/magazine.service";
export declare class MagazineController extends BaseController<CreateMagazineDto> {
    private readonly magazineService;
    private readonly TransformRequest;
    private readonly categoryService;
    constructor(magazineService: MagazineService, TransformRequest: TransformRequest, categoryService: CategoryService);
    create(files: Array<Express.Multer.File>, createDto: CreateMagazineDto, request: Request): Promise<any>;
    delete(body: {
        id: string;
    }, request: Request): Promise<void>;
    front(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./magazine.entity").Magazine[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    slug(filterQueryDto: FilterQueryDto): Promise<{
        data: import("../blogs/blog.entity").Blog[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
}
