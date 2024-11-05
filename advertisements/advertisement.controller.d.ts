import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreatAdvertisementDto } from "./dtos/create-advertisements.dto";
import { AdvertisementService } from "./providers/advertisement.service";
export declare class AdvertisementServiceController extends BaseController<CreatAdvertisementDto> {
    private readonly advertisementService;
    private readonly transformRequest;
    constructor(advertisementService: AdvertisementService, transformRequest: TransformRequest);
}
