declare const multerOptions: {
    storage: import("multer").StorageEngine;
    limits: {
        fileSize: number;
    };
    fileFilter: (req: any, file: any, cb: any) => void;
};
export default multerOptions;
