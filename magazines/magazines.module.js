"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagazinesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blogs_module_1 = require("../blogs/blogs.module");
const category_module_1 = require("../categories/category.module");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const magazine_controller_1 = require("./magazine.controller");
const magazine_entity_1 = require("./magazine.entity");
const magazine_service_1 = require("./providers/magazine.service");
let MagazinesModule = class MagazinesModule {
};
exports.MagazinesModule = MagazinesModule;
exports.MagazinesModule = MagazinesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            (0, common_1.forwardRef)(() => category_module_1.CategoryModule),
            users_module_1.UsersModule,
            blogs_module_1.BlogsModule,
            filter_date_module_1.FilterDateModule,
            typeorm_1.TypeOrmModule.forFeature([magazine_entity_1.Magazine]),
        ],
        controllers: [magazine_controller_1.MagazineController],
        providers: [magazine_service_1.MagazineService],
        exports: [magazine_service_1.MagazineService],
    })
], MagazinesModule);
//# sourceMappingURL=magazines.module.js.map