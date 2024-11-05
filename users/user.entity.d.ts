import { Graduates } from "src/graduates/graduates.entity";
import { Role } from "src/roles/role.entity";
import { Gender } from "./enum/enum";
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    phone_number: string;
    country: string;
    email: string;
    gender: Gender;
    address?: string;
    password?: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    role: Role;
    graduate: Graduates;
}
