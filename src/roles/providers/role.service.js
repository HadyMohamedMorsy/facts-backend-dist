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
exports.RoleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const role_entity_1 = require("../role.entity");
let RoleService = class RoleService {
    constructor(repository) {
        this.repository = repository;
    }
    async findAll() {
        const entity = await this.repository.find();
        return {
            data: entity,
        };
    }
    async findOneById(id) {
        let role = undefined;
        try {
            role = await this.repository.findOne({
                where: { id },
            });
        }
        catch (err) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                description: `Error connecting to the the datbase ${err}`,
            });
        }
        if (!role) {
            throw new common_1.BadRequestException("The role id does not exist");
        }
        return role;
    }
    async delete(id) {
        await this.repository.delete(id);
        return { deleted: true, id };
    }
};
exports.RoleService = RoleService;
exports.RoleService = RoleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RoleService);
//# sourceMappingURL=role.service.js.map