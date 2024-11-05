"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraduatesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const graduates_controller_1 = require("./graduates.controller");
const graduates_entity_1 = require("./graduates.entity");
const graduates_service_1 = require("./providers/graduates.service");
let GraduatesModule = class GraduatesModule {
};
exports.GraduatesModule = GraduatesModule;
exports.GraduatesModule = GraduatesModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, filter_date_module_1.FilterDateModule, typeorm_1.TypeOrmModule.forFeature([graduates_entity_1.Graduates])],
        controllers: [graduates_controller_1.GraduatesController],
        providers: [graduates_service_1.GraduatesService],
    })
], GraduatesModule);
//# sourceMappingURL=graduates.module.js.map