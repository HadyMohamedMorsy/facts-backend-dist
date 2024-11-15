import { Request } from "express";
import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateJobDto } from "./dtos/create-job.dto";
import { JobService } from "./providers/job.service";
export declare class JobController extends BaseController<CreateJobDto> {
    private readonly jobService;
    private readonly TransformRequest;
    constructor(jobService: JobService, TransformRequest: TransformRequest);
    create(files: Array<Express.Multer.File>, createDto: any, request: Request): Promise<void>;
}
