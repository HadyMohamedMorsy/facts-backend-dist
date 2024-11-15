import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { CreateApplicantGraduatesDto } from "./dtos/create-applicants-graduates";
import { ApplicantGraduatesService } from "./providers/applicants-graduates.service";
export declare class ApplicantGraduatesController {
    private readonly applicantGraduatesService;
    constructor(applicantGraduatesService: ApplicantGraduatesService);
    index(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./applicant-graduates.entity").ApplicantGraduates[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateApplicantGraduatesDto): Promise<import("./applicant-graduates.entity").ApplicantGraduates[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
