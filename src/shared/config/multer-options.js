"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const multer_1 = require("multer");
const path_1 = require("path");
const multerOptions = {
    storage: (0, multer_1.diskStorage)({
        destination: (req, file, cb) => {
            const modulePath = req.path.split("/")[3];
            const dest = (0, path_1.join)(process.cwd(), "public", "uploads", modulePath);
            if (!(0, fs_1.existsSync)(dest)) {
                (0, fs_1.mkdirSync)(dest, { recursive: true });
            }
            cb(null, dest);
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}${(0, path_1.extname)(file.originalname)}`;
            cb(null, uniqueSuffix);
        },
    }),
    limits: {
        fileSize: 100 * 1024,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" ||
            file.mimetype === "image/png" ||
            file.mimetype === "image/svg+xml" ||
            file.mimetype === "application/pdf") {
            cb(null, true);
        }
        else {
            cb(new common_1.BadRequestException("Only .png or pdf or .jpg files are allowed!"), false);
        }
    },
};
exports.default = multerOptions;
//# sourceMappingURL=multer-options.js.map