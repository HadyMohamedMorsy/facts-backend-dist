import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateConsultancyDto } from "./dtos/create-consultancy.dto";
import { ConsultancyService } from "./providers/consultancy.service";
export declare class ConsultancyController extends BaseController<CreateConsultancyDto> {
    private readonly consultancyService;
    private readonly TransformRequest;
    constructor(consultancyService: ConsultancyService, TransformRequest: TransformRequest);
    findBySlug(slug: string): Promise<{
        data: import("./consultancy.entity").Consultancy;
    }>;
}
