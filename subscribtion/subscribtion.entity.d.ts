import { User } from "src/users/user.entity";
export declare class Subscribe {
    id: number;
    created_by: User;
    email_subscribe: string;
    type: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
