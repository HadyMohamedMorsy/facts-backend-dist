import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateBannerDto } from "./dtos/create-banner.dto";
import { BannerService } from "./providers/banner.service";
export declare class BannerController extends BaseController<CreateBannerDto> {
    private readonly bannerService;
    private readonly transformRequest;
    constructor(bannerService: BannerService, transformRequest: TransformRequest);
}
