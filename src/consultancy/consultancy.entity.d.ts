import { Base } from "src/shared/common/base/entity/base.entity";
import { ConsultancyAccordion } from "./consultancy-accordion.entity";
export declare class Consultancy extends Base {
    title_en: string;
    title_ar: string;
    slug: string;
    featuredImage: string;
    short_description_en?: string;
    short_description_ar?: string;
    consultancy_accordion: ConsultancyAccordion[];
}
