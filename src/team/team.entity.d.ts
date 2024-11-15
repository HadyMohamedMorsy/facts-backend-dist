import { Base } from "src/shared/common/base/entity/base.entity";
import { TeamSocial } from "./team-social.entity";
export declare class Team extends Base {
    name_en: string;
    name_ar: string;
    phone_number: string[];
    description_en: string;
    description_ar: string;
    position_en: string;
    position_ar: string;
    social_links: TeamSocial[];
    featuredImage: string;
}
