import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { CreateApplicantEducationtDto } from "./dtos/create-applicants-education";
import { ApplicantEducationService } from "./providers/applicants-education.service";
export declare class ApplicantEducationController {
    private readonly applicantEducationService;
    constructor(applicantEducationService: ApplicantEducationService);
    index(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./applicant-education.entity").ApplicantEducation[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateApplicantEducationtDto): Promise<import("./applicant-education.entity").ApplicantEducation[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
