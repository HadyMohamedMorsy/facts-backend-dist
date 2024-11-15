import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateServiceDto } from "./dto/service.dto";
import { ServiceService } from "./providers/service.service";
export declare class ServiceController extends BaseController<CreateServiceDto> {
    private readonly serviceService;
    private readonly transformRequest;
    constructor(serviceService: ServiceService, transformRequest: TransformRequest);
}
