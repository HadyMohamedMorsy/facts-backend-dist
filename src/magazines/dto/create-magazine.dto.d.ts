import { Category } from "src/categories/category.entity";
import { BaseDto } from "src/shared/common/base/base.dto";
import { MagazineCategoriesDto } from "./magazine-categories.dto";
export declare class CreateMagazineDto extends BaseDto {
    title_en: string;
    title_ar: string;
    slug: string;
    short_description_en?: string;
    short_description_ar?: string;
    featuredImage: string;
    publication_date?: Date;
    selectedCategories: MagazineCategoriesDto[];
    categories: Category[];
}
