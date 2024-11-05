import { BaseDto } from "src/shared/common/base/base.dto";
import { EducationDetailsDto } from "./details-education.dto";
import { EducationAccordion } from "./educations.dto";
export declare class CreateEducationsDto extends BaseDto {
    title_en: string;
    title_ar: string;
    intro_description_ar?: string;
    intro_description_en?: string;
    slug: string;
    short_description_en?: string;
    short_description_ar?: string;
    featuredImage: string;
    thumbnail: string;
    education_accordion: EducationAccordion[];
    education_details: EducationDetailsDto[];
}
