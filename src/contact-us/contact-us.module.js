"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactUsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const contact_us_controller_1 = require("./contact-us.controller");
const contact_us_entity_1 = require("./contact-us.entity");
const contact_us_service_1 = require("./providers/contact-us.service");
let ContactUsModule = class ContactUsModule {
};
exports.ContactUsModule = ContactUsModule;
exports.ContactUsModule = ContactUsModule = __decorate([
    (0, common_1.Module)({
        imports: [filter_date_module_1.FilterDateModule, typeorm_1.TypeOrmModule.forFeature([contact_us_entity_1.Contact])],
        controllers: [contact_us_controller_1.ContactUsController],
        providers: [contact_us_service_1.ContactUsService],
    })
], ContactUsModule);
//# sourceMappingURL=contact-us.module.js.map