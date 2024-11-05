"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDto = validateDto;
const common_1 = require("@nestjs/common");
const dto_mapping_1 = require("../../config/dto-mapping");
async function validateDto(path, body, isPartial = true) {
    const dtoClass = dto_mapping_1.dtoMappings[path];
    const validationPipe = new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: isPartial,
    });
    return await validationPipe.transform(body, {
        metatype: dtoClass,
        type: "body",
    });
}
//# sourceMappingURL=validateDto.pipe.js.map