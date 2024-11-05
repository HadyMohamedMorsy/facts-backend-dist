import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { Repository } from "typeorm";
import { ApplicantEducation } from "../applicant-education.entity";
import { CreateApplicantEducationtDto } from "../dtos/create-applicants-education";
export declare class ApplicantEducationService {
    private readonly repository;
    private readonly filterData;
    constructor(repository: Repository<ApplicantEducation>, filterData: FilterDataProvider<ApplicantEducation>);
    findAll(filter: FilterQueryDto): Promise<{
        data: ApplicantEducation[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateApplicantEducationtDto): Promise<ApplicantEducation[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
