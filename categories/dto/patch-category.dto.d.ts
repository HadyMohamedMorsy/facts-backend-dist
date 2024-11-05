import { CreateCategoryDto } from "./create-category.dto";
declare const PatchCategoryDto_base: import("@nestjs/common").Type<Partial<CreateCategoryDto>>;
export declare class PatchCategoryDto extends PatchCategoryDto_base {
    id: number;
}
export {};
