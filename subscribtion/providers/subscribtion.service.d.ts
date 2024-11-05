import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { Repository } from "typeorm";
import { CreateSubscribeDto } from "../dtos/create-subscribe";
import { Subscribe } from "../subscribtion.entity";
export declare class SubscribtionService {
    private readonly repository;
    private readonly filterData;
    constructor(repository: Repository<Subscribe>, filterData: FilterDataProvider<Subscribe>);
    findAll(filter: FilterQueryDto): Promise<{
        data: Subscribe[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateSubscribeDto): Promise<Subscribe[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
