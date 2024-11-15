import { CreateServiceDto } from "./service.dto";
declare const PatchServiceDto_base: import("@nestjs/common").Type<Partial<CreateServiceDto>>;
export declare class PatchServiceDto extends PatchServiceDto_base {
    id: number;
}
export {};
