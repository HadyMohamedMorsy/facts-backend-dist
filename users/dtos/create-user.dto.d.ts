import { Gender } from "../enum/enum";
export declare class CreateUserDto {
    firstName: string;
    lastName?: string;
    email: string;
    gender: Gender;
    username: string;
    password: string;
    password_confirmation: string;
    role: number;
    country?: string;
    phone_number?: string;
    address?: string;
    is_active?: boolean;
}
