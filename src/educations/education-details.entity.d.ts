import { BaseTime } from "src/shared/common/base/entity/base-time.entity";
import { Education } from "./education.entity";
export declare class EducationDetails extends BaseTime {
    name_en: string;
    name_ar: string;
    value_en: string;
    value_ar: string;
    education: Education;
}
