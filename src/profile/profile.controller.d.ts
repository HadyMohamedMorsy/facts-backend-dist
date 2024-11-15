import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateProfiletDto } from "./dtos/create-profile";
import { ProfileService } from "./providers/profile.service";
export declare class ProfileController extends BaseController<CreateProfiletDto> {
    private readonly profileService;
    private readonly TransformRequest;
    constructor(profileService: ProfileService, TransformRequest: TransformRequest);
}
