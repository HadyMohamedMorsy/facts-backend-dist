import { Repository } from "typeorm";
import { FilterQueryDto } from "../dtos/filter.dto";
export declare class FilterDataProvider<T> {
    #private;
    private readonly request;
    constructor(request: Request);
    initRepositry(entity: string, repository: Repository<T>, filterData: FilterQueryDto): this;
    getRelatedFieldsLang(fieldName: any): string;
    filter(): this;
    provideFields(providers: string[]): this;
    searchFrontOnly(searchString: string, fields: string[]): this;
    sort(): this;
    count(): Promise<number>;
    paginate(): this;
    search(): this;
    excludeFields(entity: any, fields: any): this;
    joinRelations(relation: string, fields?: string[]): this;
    searchFrontRelation(searchRel: {
        [fieldPath: string]: string;
    }): this;
    searchRelations(): this;
    dynamicFilter(filters: {
        [key: string]: any;
    }): this;
    joinInnerRelations(relation: string, fields?: string[]): this;
    filterByActive(): this;
    orderByOrder(direction?: "ASC" | "DESC"): this;
    joinRelatedEntitiesById(relationName: string, relationEntityField: string, id: any, fields?: string[]): this;
    execute(): Promise<T[]>;
}
