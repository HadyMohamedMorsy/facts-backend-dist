"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformRequest = void 0;
const common_1 = require("@nestjs/common");
let TransformRequest = class TransformRequest {
    initEntity(request, patch, entity) {
        this.request = request;
        this.patch = patch;
        this.entity = entity;
        this.baseURL = `${request.protocol}://${request.headers.host}`;
        return this;
    }
    handleFiles(files) {
        if (files.length) {
            const modulePath = this.request.path.split("/")[3];
            const fileGroup = {};
            files.forEach(file => {
                const fileUrl = `${this.baseURL}/public/uploads/${modulePath}/${file.filename}`;
                const fieldname = file.fieldname.replace(/\[\d+\]$/, "");
                if (fileGroup[fieldname]) {
                    fileGroup[fieldname].push(fileUrl);
                }
                else {
                    fileGroup[fieldname] = [fileUrl];
                }
            });
            Object.keys(fileGroup).forEach(fieldname => {
                if (fileGroup[fieldname].length > 1) {
                    this.patch[fieldname] = fileGroup[fieldname];
                }
                else {
                    this.patch[fieldname] = fileGroup[fieldname][0];
                }
            });
        }
        return this;
    }
    updateEntity() {
        Object.keys(this.patch).forEach(key => {
            this.entity[key] = this.patch[key] ? this.patch[key] : this.entity[key];
        });
        return this;
    }
    checkDuplicate(keys) {
        if (keys && keys.length) {
            keys.forEach(key => {
                if (this.patch[key] == this.entity[key]) {
                    delete this.entity[key];
                }
            });
        }
        return this;
    }
    getUpdatedEntity() {
        return this.entity;
    }
};
exports.TransformRequest = TransformRequest;
exports.TransformRequest = TransformRequest = __decorate([
    (0, common_1.Injectable)()
], TransformRequest);
//# sourceMappingURL=transform-request.entity.provider.js.map