import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { CreateEmployertDto } from "./dtos/create-employer";
import { EmployerService } from "./providers/employer.service";
export declare class EmployerController {
    private readonly employerService;
    constructor(employerService: EmployerService);
    index(filterQueryDto: FilterQueryDto): Promise<import("./employer.entity").Employer[]>;
    create(createDto: CreateEmployertDto): Promise<import("./employer.entity").Employer[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
