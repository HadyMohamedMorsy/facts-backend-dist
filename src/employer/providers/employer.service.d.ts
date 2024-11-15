import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { Repository } from "typeorm";
import { CreateEmployertDto } from "../dtos/create-employer";
import { Employer } from "../employer.entity";
export declare class EmployerService {
    private readonly repository;
    private readonly filterData;
    constructor(repository: Repository<Employer>, filterData: FilterDataProvider<Employer>);
    findAll(filter: FilterQueryDto): Promise<Employer[]>;
    create(createDto: CreateEmployertDto): Promise<Employer[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
