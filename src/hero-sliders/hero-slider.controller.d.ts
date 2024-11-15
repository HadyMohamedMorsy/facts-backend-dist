import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateHeroSliderDto } from "./dtos/create-hero-slider.dto";
import { HeroSliderService } from "./providers/hero-slider.service";
export declare class HeroSliderController extends BaseController<CreateHeroSliderDto> {
    private readonly heroSliderService;
    private readonly TransformRequest;
    constructor(heroSliderService: HeroSliderService, TransformRequest: TransformRequest);
}
