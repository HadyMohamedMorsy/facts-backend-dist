import { Request } from "express";
import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateApplicantJobstDto } from "./dtos/create-applicants-job";
import { ApplicantJobsService } from "./providers/applicants-job.service";
export declare class ApplicantJobController extends BaseController<CreateApplicantJobstDto> {
    private readonly applicantJobsService;
    private readonly transformRequest;
    constructor(applicantJobsService: ApplicantJobsService, transformRequest: TransformRequest);
    create(files: Array<Express.Multer.File>, createDto: any, request: Request): Promise<void>;
}
