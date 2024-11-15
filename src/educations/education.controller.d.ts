import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateEducationsDto } from "./dtos/create-educations.dto";
import { EducationService } from "./providers/education.service";
export declare class EducationController extends BaseController<CreateEducationsDto> {
    private readonly educationService;
    private readonly TransformRequest;
    constructor(educationService: EducationService, TransformRequest: TransformRequest);
    findBySlug(slug: string): Promise<{
        data: import("./education.entity").Education;
    }>;
}
