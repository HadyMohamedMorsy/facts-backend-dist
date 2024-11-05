import { BaseDto } from "src/shared/common/base/base.dto";
export declare class CreatePatchDto extends BaseDto {
    name_en: string;
    name_ar: string;
    year: string;
    description_en?: string;
    description_ar?: string;
    files: string[];
}
