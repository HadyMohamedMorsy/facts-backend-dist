import { ApplicantGraduates } from "src/applicants-graduates/applicant-graduates.entity";
import { Base } from "src/shared/common/base/entity/base.entity";
import { EducationAccordion } from "./education-accordion.entity";
import { EducationDetails } from "./education-details.entity";
export declare class Education extends Base {
    title_en: string;
    title_ar: string;
    slug: string;
    applications: ApplicantGraduates[];
    intro_description_ar?: string;
    intro_description_en?: string;
    short_description_en?: string;
    short_description_ar?: string;
    featuredImage: string;
    thumbnail: string;
    education_accordion?: EducationAccordion[];
    education_details?: EducationDetails[];
}
