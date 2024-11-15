import { ApplicantJob } from "src/applicants-job/applicant-job.entity";
import { User } from "src/users/user.entity";
import { TYPE } from "./enum/enum";
export declare class Job {
    id: number;
    title_en: string;
    title_ar: string;
    short_description_en: string;
    short_description_ar: string;
    type: TYPE;
    sallary: number;
    description_en: string;
    description_ar: string;
    featuredImage: string;
    applications: ApplicantJob[];
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    created_by: User;
}
