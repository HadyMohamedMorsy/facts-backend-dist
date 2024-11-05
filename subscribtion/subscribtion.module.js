"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribtionModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const subscribtion_service_1 = require("./providers/subscribtion.service");
const subscribtion_controller_1 = require("./subscribtion.controller");
const subscribtion_entity_1 = require("./subscribtion.entity");
let SubscribtionModule = class SubscribtionModule {
};
exports.SubscribtionModule = SubscribtionModule;
exports.SubscribtionModule = SubscribtionModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, filter_date_module_1.FilterDateModule, typeorm_1.TypeOrmModule.forFeature([subscribtion_entity_1.Subscribe])],
        controllers: [subscribtion_controller_1.SubscribtionController],
        providers: [subscribtion_service_1.SubscribtionService],
    })
], SubscribtionModule);
//# sourceMappingURL=subscribtion.module.js.map