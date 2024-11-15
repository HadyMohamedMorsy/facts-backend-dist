import { BaseTime } from "src/shared/common/base/entity/base-time.entity";
import { Education } from "./education.entity";
export declare class EducationAccordion extends BaseTime {
    accordion_title_en: string;
    accordion_title_ar: string;
    description_en: string;
    description_ar: string;
    education: Education;
}
