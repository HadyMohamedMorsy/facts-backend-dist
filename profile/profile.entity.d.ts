import { Gender } from "src/users/enum/enum";
import { User } from "src/users/user.entity";
export declare class Profile {
    id: number;
    created_by: User;
    first_name: string;
    last_name: string;
    age: string;
    gender: Gender;
    country?: string;
    phone_number: string;
    experience: string;
    skills: string[];
    facebook?: string;
    achievements?: string;
    attachment?: string;
    createdAt: Date;
    updatedAt: Date;
}
