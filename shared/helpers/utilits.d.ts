import { Request } from "express";
export declare function cleanFilesWithError(files: Express.Multer.File[]): void;
export declare function checkUpdateFiles(entity: any, patch: any, request: Request): void;
export declare function deleteFile(url: string, request: Request): void;
