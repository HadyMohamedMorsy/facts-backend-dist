import { User } from "src/users/user.entity";
import { BaseEntity } from "typeorm";
export declare abstract class Base extends BaseEntity {
    id: number;
    is_active: boolean;
    order: number;
    created_at: Date;
    updated_at: Date;
    created_by: User;
}
