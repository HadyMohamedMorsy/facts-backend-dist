import { Education } from "src/educations/education.entity";
import { User } from "src/users/user.entity";
export declare class ApplicantEducation {
    id: number;
    created_by: User;
    education: Education;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
