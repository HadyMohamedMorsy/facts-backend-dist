import { Magazine } from "src/magazines/magazine.entity";
import { Base } from "src/shared/common/base/entity/base.entity";
export declare class Category extends Base {
    name_en: string;
    name_ar: string;
    slug: string;
    magazines: Magazine[];
}
