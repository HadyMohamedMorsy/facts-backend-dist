import { Graduates } from "src/graduates/graduates.entity";
import { User } from "src/users/user.entity";
export declare class ApplicantGraduates {
    id: number;
    created_by: User;
    graduate: Graduates;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
}
