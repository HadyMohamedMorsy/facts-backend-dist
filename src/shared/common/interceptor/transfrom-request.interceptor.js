"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeaderToBodyInterceptor = void 0;
const common_1 = require("@nestjs/common");
class HeaderToBodyInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const createdBy = request.headers["created_by"];
        if (!createdBy) {
            throw new common_1.BadRequestException("Missing x-localization or created_by in headers");
        }
        request.body = {
            ...request.body,
            created_by: createdBy,
        };
        return next.handle();
    }
}
exports.HeaderToBodyInterceptor = HeaderToBodyInterceptor;
//# sourceMappingURL=transfrom-request.interceptor.js.map