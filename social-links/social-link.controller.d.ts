import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateSocialLinkDto } from "./dtos/create-social-link";
import { SocialLinkService } from "./providers/social-link.service";
export declare class SocialLinkController extends BaseController<CreateSocialLinkDto> {
    private readonly socialLinkService;
    private readonly transformRequest;
    constructor(socialLinkService: SocialLinkService, transformRequest: TransformRequest);
}
