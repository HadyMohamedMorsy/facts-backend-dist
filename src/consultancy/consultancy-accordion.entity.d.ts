import { BaseTime } from "src/shared/common/base/entity/base-time.entity";
import { Consultancy } from "./consultancy.entity";
export declare class ConsultancyAccordion extends BaseTime {
    accordion_title_en: string;
    accordion_title_ar: string;
    description_en: string;
    description_ar: string;
    consultancy: Consultancy;
}
