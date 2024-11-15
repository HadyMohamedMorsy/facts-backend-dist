"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanFilesWithError = cleanFilesWithError;
exports.checkUpdateFiles = checkUpdateFiles;
exports.deleteFile = deleteFile;
const fs_1 = require("fs");
const path_1 = require("path");
function cleanFilesWithError(files) {
    for (const file of files) {
        if ((0, fs_1.existsSync)(file.path)) {
            (0, fs_1.unlink)(file.path, err => {
                if (err) {
                    throw err;
                }
                console.log(`${file.path} was deleted`);
            });
        }
        else {
            console.log(`File ${file.path} does not exist, skipping deletion.`);
        }
    }
}
function checkUpdateFiles(entity, patch, request) {
    const keysToCheck = ["files"];
    for (const key of keysToCheck) {
        if (!entity[key])
            return;
        for (const url of entity[key]) {
            if (!patch[key].includes(url)) {
                deleteFile(url, request);
            }
        }
    }
}
function deleteFile(url, request) {
    const fileName = url.split("/").pop();
    const modulePath = request.path.split("/")[3];
    const fullPath = (0, path_1.join)(process.cwd(), "public", "uploads", modulePath, fileName);
    const exists = (0, fs_1.existsSync)(fullPath);
    if (exists) {
        (0, fs_1.unlink)(fullPath, err => {
            if (err)
                throw err;
            console.log(`${fullPath} was deleted`);
        });
    }
    else {
        console.log(`No file to delete at ${fullPath}`);
    }
}
//# sourceMappingURL=utilits.js.map