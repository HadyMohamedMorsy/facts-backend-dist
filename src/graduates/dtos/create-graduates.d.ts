import { createUserGraduatesDto } from "./create-graduates-users.dto";
export declare class CreateGraduatestDto {
    created_by: number;
    user: number;
    selectUser: createUserGraduatesDto;
    slug: string;
    type: string;
    course_name: string;
    code_certification: string;
    date_course: string;
    description_en: string;
    description_ar: string;
    courses: string[];
    featuredImage: string;
    image_certification: string;
    attachment: string;
}
