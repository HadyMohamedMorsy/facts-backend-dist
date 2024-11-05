import { User } from "src/users/user.entity";
export declare class Employer {
    id: number;
    company_name: string;
    business_type: string;
    industry: string;
    created_by: User;
    is_active: boolean;
    company_address: string;
    company_phone: string;
    company_email: string;
    website_url: string;
    createdAt: Date;
    updatedAt: Date;
}
