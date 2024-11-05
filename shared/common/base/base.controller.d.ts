import { Request } from "express";
import { FilterQueryDto } from "../filter/dtos/filter.dto";
import { TransformRequest } from "../filter/providers/transform-request.entity.provider";
import { IBaseService } from "./service.types";
type UpdateDto<CreateDto> = {
    id: number;
} & CreateDto;
export declare abstract class BaseController<CreateDto> {
    private readonly baseService;
    private readonly transform;
    constructor(baseService: IBaseService<CreateDto>, transform: TransformRequest);
    protected propertiesRel: string[];
    protected duplicatedPropertirs: string[];
    front(filterQueryDto: FilterQueryDto): any;
    index(filterQueryDto: FilterQueryDto): any;
    create(files: Array<Express.Multer.File>, createDto: CreateDto, request: Request): Promise<any>;
    update(files: Array<Express.Multer.File>, patch: UpdateDto<CreateDto>, request: Request): Promise<any>;
    delete(body: {
        id: string;
    }, request: Request): Promise<void>;
    processFileUpload(request: Request, createDto: CreateDto, files: Array<Express.Multer.File>): Promise<CreateDto>;
}
export {};
