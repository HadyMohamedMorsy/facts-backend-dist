import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { CreateSubscribeDto } from "./dtos/create-subscribe";
import { SubscribtionService } from "./providers/subscribtion.service";
export declare class SubscribtionController {
    private readonly subscribtionService;
    constructor(subscribtionService: SubscribtionService);
    index(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./subscribtion.entity").Subscribe[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateSubscribeDto): Promise<import("./subscribtion.entity").Subscribe[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
