import { BaseDto } from "src/shared/common/base/base.dto";
import { ConsultancyAccordienDto } from "./consultancy-accordien.dto";
export declare class CreateConsultancyDto extends BaseDto {
    title_en: string;
    title_ar: string;
    slug: string;
    short_description_en?: string;
    short_description_ar?: string;
    featuredImage: string;
    consultancy_accordion: ConsultancyAccordienDto[];
}
