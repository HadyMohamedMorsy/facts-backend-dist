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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateConsultancyDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const base_dto_1 = require("../../shared/common/base/base.dto");
const consultancy_accordien_dto_1 = require("./consultancy-accordien.dto");
class CreateConsultancyDto extends base_dto_1.BaseDto {
}
exports.CreateConsultancyDto = CreateConsultancyDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(256),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "title_en", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(256),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "title_ar", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
        message: 'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
    }),
    (0, class_validator_1.MaxLength)(512),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "slug", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "short_description_en", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "short_description_ar", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateConsultancyDto.prototype, "featuredImage", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => consultancy_accordien_dto_1.ConsultancyAccordienDto),
    __metadata("design:type", Array)
], CreateConsultancyDto.prototype, "consultancy_accordion", void 0);
//# sourceMappingURL=create-consultancy.dto.js.map