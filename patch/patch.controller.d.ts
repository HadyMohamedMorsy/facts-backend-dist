import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreatePatchDto } from "./dtos/create-patch.dto";
import { PatchService } from "./providers/patch.service";
export declare class PatchController extends BaseController<CreatePatchDto> {
    private readonly patchService;
    private readonly TransformRequest;
    constructor(patchService: PatchService, TransformRequest: TransformRequest);
}
