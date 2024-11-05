"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const filter_dto_1 = require("../shared/common/filter/dtos/filter.dto");
const create_contact_1 = require("./dtos/create-contact");
const contact_us_service_1 = require("./providers/contact-us.service");
let ContactUsController = class ContactUsController {
    constructor(contactUsService) {
        this.contactUsService = contactUsService;
    }
    index(filterQueryDto) {
        return this.contactUsService.findAll(filterQueryDto);
    }
    async create(createDto) {
        return this.contactUsService.create(createDto);
    }
    delete(id) {
        return this.contactUsService.delete(id);
    }
};
exports.ContactUsController = ContactUsController;
__decorate([
    (0, common_1.Post)("/index"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], ContactUsController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("/store"),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_contact_1.CreateContactDto]),
    __metadata("design:returntype", Promise)
], ContactUsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)("/delete"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ContactUsController.prototype, "delete", null);
exports.ContactUsController = ContactUsController = __decorate([
    (0, common_1.Controller)("contact"),
    __metadata("design:paramtypes", [contact_us_service_1.ContactUsService])
], ContactUsController);
//# sourceMappingURL=contact-us.controller.js.map