import { BaseDto } from "src/shared/common/base/base.dto";
export declare class CreateHeroSliderDto extends BaseDto {
    title_en: string;
    title_ar: string;
    short_description_en?: string;
    short_description_ar?: string;
    featuredImage: string;
}
