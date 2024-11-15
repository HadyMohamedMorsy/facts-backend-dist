import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { Repository } from "typeorm";
import { ApplicantGraduates } from "../applicant-graduates.entity";
import { CreateApplicantGraduatesDto } from "../dtos/create-applicants-graduates";
export declare class ApplicantGraduatesService {
    private readonly repository;
    private readonly filterData;
    constructor(repository: Repository<ApplicantGraduates>, filterData: FilterDataProvider<ApplicantGraduates>);
    findAll(filter: FilterQueryDto): Promise<{
        data: ApplicantGraduates[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateApplicantGraduatesDto): Promise<ApplicantGraduates[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
