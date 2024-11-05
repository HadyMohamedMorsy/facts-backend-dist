import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { CreateContactDto } from "./dtos/create-contact";
import { ContactUsService } from "./providers/contact-us.service";
export declare class ContactUsController {
    private readonly contactUsService;
    constructor(contactUsService: ContactUsService);
    index(filterQueryDto: FilterQueryDto): Promise<{
        data: import("./contact-us.entity").Contact[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateContactDto): Promise<import("./contact-us.entity").Contact[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
