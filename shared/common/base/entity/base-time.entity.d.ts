import { BaseEntity } from "typeorm";
export declare abstract class BaseTime extends BaseEntity {
    id: number;
    created_at: Date;
    updated_at: Date;
}
