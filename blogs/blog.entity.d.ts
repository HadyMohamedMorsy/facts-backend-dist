import { Magazine } from "src/magazines/magazine.entity";
import { Base } from "src/shared/common/base/entity/base.entity";
import { createMagazineBlogDto } from "./dto/create-magazine-blog.dto";
export declare class Blog extends Base {
    title_en: string;
    title_ar: string;
    slug: string;
    meta_title_en: string;
    meta_title_ar: string;
    meta_description_en: string;
    meta_description_ar: string;
    short_description_en: string;
    short_description_ar: string;
    description_en: string;
    description_ar: string;
    featuredImage: string;
    thumbnail: string;
    magazine: Magazine;
    selectMagazine: createMagazineBlogDto;
}
