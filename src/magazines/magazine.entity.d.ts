import { Blog } from "src/blogs/blog.entity";
import { Category } from "src/categories/category.entity";
import { Base } from "src/shared/common/base/entity/base.entity";
import { MagazineCategoriesDto } from "./dto/magazine-categories.dto";
export declare class Magazine extends Base {
    title_ar: string;
    title_en: string;
    slug: string;
    short_description_ar: string;
    short_description_en: string;
    featuredImage: string;
    publication_date?: string;
    selectedCategories: MagazineCategoriesDto[];
    categories: Category[];
    blogs: Blog[];
}
