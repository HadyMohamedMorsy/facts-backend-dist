import { ApplicantGraduates } from "src/applicants-graduates/applicant-graduates.entity";
import { User } from "src/users/user.entity";
import { createUserGraduatesDto } from "./dtos/create-graduates-users.dto";
export declare class Graduates {
    id: number;
    is_active: boolean;
    selectUser: createUserGraduatesDto;
    applications: ApplicantGraduates[];
    user: User;
    type: string;
    slug: string;
    description_en: string;
    description_ar: string;
    courses: string[];
    course_name: string;
    code_certification: string;
    date_course?: string;
    featuredImage: string;
    attachment: string;
    image_certification: string;
    created_at: Date;
    updated_at: Date;
    created_by: User;
}
