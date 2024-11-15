import { BaseController } from "src/shared/common/base/base.controller";
import { TransformRequest } from "src/shared/common/filter/providers/transform-request.entity.provider";
import { CreateStatisticsDto } from "./dtos/create-statistics.dto";
import { StatisticsService } from "./providers/statistics.service";
export declare class StatisticsController extends BaseController<CreateStatisticsDto> {
    private readonly statisticsService;
    private readonly TransformRequest;
    constructor(statisticsService: StatisticsService, TransformRequest: TransformRequest);
}
