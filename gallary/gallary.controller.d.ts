import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateGallarysDto } from "./dtos/create-gallary.dto";
import { GallaryService } from "./providers/gallary.service";
export declare class GallaryController extends BaseController<CreateGallarysDto> {
    private readonly gallaryService;
    private readonly TransformRequest;
    constructor(gallaryService: GallaryService, TransformRequest: TransformRequest);
}
