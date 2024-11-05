import { BaseDto } from "src/shared/common/base/base.dto";
import { SoicalLinkDto } from "./social-links.dto";
export declare class CreateTeamDto extends BaseDto {
    name_en: string;
    name_ar: string;
    phone_number: string[];
    description_en: string;
    description_ar: string;
    position_en: string;
    position_ar: string;
    social_links?: SoicalLinkDto[];
    featuredImage: string;
}
