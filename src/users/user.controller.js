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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const auth_type_enum_1 = require("../auth/enums/auth-type.enum");
const filter_dto_1 = require("../shared/common/filter/dtos/filter.dto");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const create_user_dto_1 = require("./dtos/create-user.dto");
const patch_user_dto_1 = require("./dtos/patch-user.dto");
const user_service_1 = require("./providers/user.service");
let UserController = class UserController {
    constructor(userService, transform) {
        this.userService = userService;
        this.transform = transform;
    }
    front(filterQueryDto) {
        return this.userService.front(filterQueryDto);
    }
    getUser(email) {
        return this.userService.findOneByEmail(email);
    }
    index(filterQueryDto) {
        return this.userService.findAll(filterQueryDto);
    }
    createUsers(createUserDto) {
        return this.userService.createUser(createUserDto);
    }
    async updateUsers(updateUserDto, request) {
        const entity = await this.userService.findOneByEmail(updateUserDto.email);
        const updatedDto = this.transform
            .initEntity(request, updateUserDto, entity)
            .updateEntity()
            .checkDuplicate(["username", "email", "phone_number"])
            .getUpdatedEntity();
        if (!updateUserDto.password)
            delete updatedDto["password"];
        return this.userService.updateUser(updatedDto);
    }
    delete(id) {
        return this.userService.delete(id);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)("front/index"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "front", null);
__decorate([
    (0, common_1.Get)("user"),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Query)("email")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)("/index"),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [filter_dto_1.FilterQueryDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "index", null);
__decorate([
    (0, common_1.Post)("/signup"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    (0, auth_decorator_1.Auth)(auth_type_enum_1.AuthType.None),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "createUsers", null);
__decorate([
    (0, common_1.Post)("/update"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [patch_user_dto_1.PatchUserDto, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUsers", null);
__decorate([
    (0, common_1.Delete)("/delete"),
    (0, common_1.UseInterceptors)((0, platform_express_1.NoFilesInterceptor)()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "delete", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)("user"),
    __metadata("design:paramtypes", [user_service_1.UserService,
        transform_request_entity_provider_1.TransformRequest])
], UserController);
//# sourceMappingURL=user.controller.js.map