import { Request } from "express";
import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateGraduatestDto } from "./dtos/create-graduates";
import { GraduatesService } from "./providers/graduates.service";
export declare class GraduatesController extends BaseController<CreateGraduatestDto> {
    private readonly graduatesService;
    private readonly transformRequest;
    constructor(graduatesService: GraduatesService, transformRequest: TransformRequest);
    createGraduate(files: Array<Express.Multer.File>, createDto: any, request: Request): Promise<void>;
    findBySlug(slug: string): Promise<{
        data: import("./graduates.entity").Graduates;
    }>;
}
