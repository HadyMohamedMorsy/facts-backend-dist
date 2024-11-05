"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const blogs_module_1 = require("../blogs/blogs.module");
const magazines_module_1 = require("../magazines/magazines.module");
const filter_date_module_1 = require("../shared/common/filter/filter-date.module");
const users_module_1 = require("../users/users.module");
const category_controller_1 = require("./category.controller");
const category_entity_1 = require("./category.entity");
const category_service_1 = require("./providers/category.service");
let CategoryModule = class CategoryModule {
};
exports.CategoryModule = CategoryModule;
exports.CategoryModule = CategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            blogs_module_1.BlogsModule,
            filter_date_module_1.FilterDateModule,
            (0, common_1.forwardRef)(() => magazines_module_1.MagazinesModule),
            typeorm_1.TypeOrmModule.forFeature([category_entity_1.Category]),
        ],
        controllers: [category_controller_1.CategoryController],
        providers: [category_service_1.CategoryService],
        exports: [category_service_1.CategoryService],
    })
], CategoryModule);
//# sourceMappingURL=category.module.js.map