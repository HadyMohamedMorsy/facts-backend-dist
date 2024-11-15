export declare class OrderDto {
    column: number;
    dir: "ASC" | "DESC";
}
export declare class DataTableColumnDto {
    title: string;
    name: string;
    searchable: boolean;
    orderable: boolean;
}
export declare class FilterQueryDto {
    length?: number;
    start?: number;
    order?: OrderDto[];
    columns?: DataTableColumnDto[];
    provideFields?: string[];
    search?: string | null;
    filters?: any;
}
