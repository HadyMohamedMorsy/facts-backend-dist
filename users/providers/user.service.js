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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const hashing_provider_1 = require("../../auth/providers/hashing.provider");
const filter_data_provider_1 = require("../../shared/common/filter/providers/filter-data.provider");
const transform_request_entity_provider_1 = require("../../shared/common/filter/providers/transform-request.entity.provider");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../user.entity");
let UserService = class UserService {
    constructor(hashingProvider, repository, filterData, transform) {
        this.hashingProvider = hashingProvider;
        this.repository = repository;
        this.filterData = filterData;
        this.transform = transform;
    }
    async findAll(filter) {
        const entity = await this.filterData
            .initRepositry("user", this.repository, filter)
            .filter()
            .sort()
            .paginate()
            .provideFields(["firstName", "lastName", "country", "phone_number", "address"])
            .joinRelations("role", ["name", "id"])
            .search()
            .execute();
        const result = await this.filterData.initRepositry("user", this.repository, filter).count();
        return {
            data: entity,
            recordsFiltered: entity.length,
            totalRecords: +result,
        };
    }
    async front(filter) {
        const entity = await this.filtersFront(filter, "user").execute();
        return {
            data: entity,
        };
    }
    filtersFront(filter, entityType) {
        const entity = this.filterData
            .initRepositry(entityType, this.repository, filter)
            .paginate()
            .searchFrontOnly(filter.search, ["username"])
            .filterByActive();
        return entity;
    }
    async findOneById(id) {
        let user = undefined;
        try {
            user = await this.repository.findOneBy({
                id,
            });
        }
        catch (err) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                description: `Error connecting to the the datbase ${err}`,
            });
        }
        if (!user) {
            throw new common_1.BadRequestException("The user id does not exist");
        }
        return user;
    }
    async findOneByEmail(email) {
        let user = undefined;
        try {
            user = await this.repository.findOne({
                where: { email },
                relations: ["role"],
            });
        }
        catch (error) {
            throw new common_1.RequestTimeoutException(error, {
                description: "Could not fetch the user",
            });
        }
        if (!user) {
            throw new common_1.UnauthorizedException("User does not exists");
        }
        return user;
    }
    async createUser(createUserDto) {
        let existingUser = undefined;
        try {
            existingUser = await this.repository.findOne({
                where: { email: createUserDto.email },
            });
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                description: `Error connecting to the database ${error}`,
            });
        }
        if (existingUser) {
            throw new common_1.BadRequestException("The user already exists, please check your email.");
        }
        let newUser = this.repository.create({
            ...createUserDto,
            password: await this.hashingProvider.hashPassword(createUserDto.password),
        });
        try {
            newUser = await this.repository.save(newUser);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                description: `Error connecting to the the datbase ${error}`,
            });
        }
        const result = await this.repository.findOne({
            where: { id: +newUser.id },
            relations: ["role"],
            select: [
                "firstName",
                "lastName",
                "email",
                "gender",
                "username",
                "address",
                "is_active",
                "created_at",
                "updated_at",
                "country",
                "phone_number",
                "id",
            ],
        });
        if (!result) {
            throw new common_1.NotFoundException(`Entity with ID ${newUser.id} not found`);
        }
        return result;
    }
    async updateUser(patch) {
        let existingUser = undefined;
        if (patch.email) {
            try {
                existingUser = await this.repository.findOne({
                    where: { email: patch.email },
                });
            }
            catch (error) {
                throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                    description: `Error connecting to the database ${error}`,
                });
            }
            if (existingUser) {
                throw new common_1.BadRequestException("The user already exists, please check your email.");
            }
        }
        if (patch.password) {
            patch.password = await this.hashingProvider.hashPassword(patch.password);
        }
        let updateUser = undefined;
        try {
            updateUser = await this.repository.save(patch);
        }
        catch (error) {
            throw new common_1.RequestTimeoutException("Unable to process your request at the moment please try later", {
                description: `Error connecting to the the datbase ${error}`,
            });
        }
        const result = await this.repository.findOne({
            where: { id: +updateUser.id },
            relations: ["role"],
            select: [
                "firstName",
                "lastName",
                "email",
                "gender",
                "username",
                "address",
                "is_active",
                "created_at",
                "updated_at",
                "country",
                "phone_number",
                "id",
            ],
        });
        if (!result) {
            throw new common_1.NotFoundException(`Entity with ID ${updateUser.id} not found`);
        }
        return result;
    }
    async delete(id) {
        await this.repository.delete(id);
        return { deleted: true, id };
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => hashing_provider_1.HashingProvider))),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [hashing_provider_1.HashingProvider,
        typeorm_2.Repository,
        filter_data_provider_1.FilterDataProvider,
        transform_request_entity_provider_1.TransformRequest])
], UserService);
//# sourceMappingURL=user.service.js.map