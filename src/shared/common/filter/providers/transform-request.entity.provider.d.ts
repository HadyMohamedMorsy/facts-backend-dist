import { Request } from "express";
export declare class TransformRequest {
    private request;
    private patch;
    private entity;
    private baseURL;
    initEntity(request: Request, patch: any, entity: any): this;
    handleFiles(files: Express.Multer.File[]): this;
    updateEntity(): this;
    checkDuplicate(keys: string[]): this;
    getUpdatedEntity(): any;
}
