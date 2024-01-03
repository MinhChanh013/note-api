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
exports.StickyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const sticky_service_1 = require("./sticky.service");
const camelcase_util_1 = require("../../utils/camelcase.util");
const sticky_entity_1 = require("../entities/sticky.entity");
const jwt_service_1 = require("../../libs/infrastructure/jwt/jwt.service");
let StickyController = class StickyController {
    constructor(stickyService) {
        this.stickyService = stickyService;
    }
    async getStickys(request) {
        const data = await this.stickyService.getStickys(request.user);
        const noteTagsData = (0, camelcase_util_1.snakeCaseKeys)(sticky_entity_1.Sticky, data);
        return noteTagsData;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_service_1.JwtService),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    (0, common_1.Get)('stickys'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StickyController.prototype, "getStickys", null);
StickyController = __decorate([
    (0, swagger_1.ApiTags)('sticky'),
    (0, common_1.Controller)('sticky'),
    __metadata("design:paramtypes", [sticky_service_1.StickyService])
], StickyController);
exports.StickyController = StickyController;
//# sourceMappingURL=sticky.controller.js.map