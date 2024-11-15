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
exports.PatchController = void 0;
const common_1 = require("@nestjs/common");
const base_controller_1 = require("../shared/common/base/base.controller");
const transform_request_entity_provider_1 = require("../shared/common/filter/providers/transform-request.entity.provider");
const patch_service_1 = require("./providers/patch.service");
let PatchController = class PatchController extends base_controller_1.BaseController {
    constructor(patchService, TransformRequest) {
        super(patchService, TransformRequest);
        this.patchService = patchService;
        this.TransformRequest = TransformRequest;
        this.duplicatedPropertirs = ["order"];
    }
};
exports.PatchController = PatchController;
exports.PatchController = PatchController = __decorate([
    (0, common_1.Controller)("patch"),
    __metadata("design:paramtypes", [patch_service_1.PatchService,
        transform_request_entity_provider_1.TransformRequest])
], PatchController);
//# sourceMappingURL=patch.controller.js.map