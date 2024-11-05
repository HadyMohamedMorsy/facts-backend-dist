import { Job } from "src/jobs/job.entity";
import { User } from "src/users/user.entity";
export declare class ApplicantJob {
    id: number;
    created_by: User;
    job: Job;
    is_active: boolean;
    attachment: string;
    created_at: Date;
    updated_at: Date;
}
