import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreatePartnersDto } from "./dtos/create-partners.dto";
import { PartnersService } from "./providers/partners.service";
export declare class PartnersController extends BaseController<CreatePartnersDto> {
    private readonly partnerService;
    private readonly TransformRequest;
    constructor(partnerService: PartnersService, TransformRequest: TransformRequest);
}
