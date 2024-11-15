import { CreateJobDto } from "./create-job.dto";
declare const PatchJobDto_base: import("@nestjs/common").Type<Partial<CreateJobDto>>;
export declare class PatchJobDto extends PatchJobDto_base {
    id: number;
}
export {};
