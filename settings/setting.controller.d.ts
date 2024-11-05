import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateSettingDto } from "./dtos/create-setting.dto";
import { SettingsService } from "./providers/settings.service";
export declare class SettingsController extends BaseController<CreateSettingDto> {
    private readonly settingsService;
    private readonly TransformRequest;
    constructor(settingsService: SettingsService, TransformRequest: TransformRequest);
}
