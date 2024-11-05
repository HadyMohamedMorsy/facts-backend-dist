import { TYPE } from "../enum/enum";
export declare class CreateJobDto {
    title_en: string;
    title_ar: string;
    type: TYPE;
    sallary: number;
    short_description_en: string;
    short_description_ar: string;
    featuredImage: string;
    description_en: string;
    description_ar: string;
    created_by: number;
}
