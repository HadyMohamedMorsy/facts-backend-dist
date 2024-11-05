import { FilterQueryDto } from "src/shared/common/filter/dtos/filter.dto";
import { FilterDataProvider } from "src/shared/common/filter/providers/filter-data.provider";
import { Repository } from "typeorm";
import { Contact } from "../contact-us.entity";
import { CreateContactDto } from "../dtos/create-contact";
export declare class ContactUsService {
    private readonly repository;
    private readonly filterData;
    constructor(repository: Repository<Contact>, filterData: FilterDataProvider<Contact>);
    findAll(filter: FilterQueryDto): Promise<{
        data: Contact[];
        recordsFiltered: number;
        totalRecords: number;
    }>;
    create(createDto: CreateContactDto): Promise<Contact[]>;
    delete(id: number): Promise<{
        deleted: boolean;
        id: number;
    }>;
}
