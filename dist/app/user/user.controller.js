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
const swagger_1 = require("@nestjs/swagger");
const user_service_1 = require("./user.service");
const user_entity_1 = require("../entities/user.entity");
const jwt_service_1 = require("../../libs/infrastructure/jwt/jwt.service");
const notemailer_dto_1 = require("../../libs/infrastructure/nodemailer/dto/notemailer.dto");
const nodemailer_service_1 = require("../../libs/infrastructure/nodemailer/nodemailer.service");
const cloudinary_service_1 = require("../../libs/infrastructure/cloudinary/cloudinary.service");
let UserController = class UserController {
    constructor(userService, notemailService, cloudinaryService) {
        this.userService = userService;
        this.notemailService = notemailService;
        this.cloudinaryService = cloudinaryService;
    }
    async register(request) {
        const data = await this.userService.registerUser(request);
        return data;
    }
    async checkEmail(request) {
        const data = await this.userService.checkEmail(request);
        return data;
    }
    async login(request) {
        const data = await this.userService.login(request);
        return data;
    }
    async SendEmail(request) {
        const data = await this.notemailService.sendEmail(request);
        return data;
    }
    async getUserInfor(request) {
        const data = await this.userService.getUserInfor(request.user);
        return data;
    }
    async uploadBackground(requestUser, request) {
        const urlBackground = await this.cloudinaryService.uploadImage(request);
        const userData = await this.userService.getUserInfor(requestUser.user);
        const dataRequest = Object.assign(Object.assign({}, userData), { background: urlBackground });
        await this.userService.updateUser(dataRequest, requestUser.user.id);
        return urlBackground;
    }
    async uploadAvatar(requestUser, request) {
        const urlAvatar = await this.cloudinaryService.uploadImage(request);
        const userData = await this.userService.getUserInfor(requestUser.user);
        const dataRequest = Object.assign(Object.assign({}, userData), { avatar: urlAvatar });
        await this.userService.updateUser(dataRequest, requestUser.user.id);
        return urlAvatar;
    }
    async updateUser(request, userId) {
        const data = await this.userService.updateUser(request, userId);
        return data;
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('check-email'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkEmail", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('send-mail'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notemailer_dto_1.NoteMailDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "SendEmail", null);
__decorate([
    (0, common_1.UseGuards)(jwt_service_1.JwtService),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    (0, common_1.Get)('user-infor'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserInfor", null);
__decorate([
    (0, common_1.UseGuards)(jwt_service_1.JwtService),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    (0, common_1.Post)('upload-background'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadBackground", null);
__decorate([
    (0, common_1.UseGuards)(jwt_service_1.JwtService),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    (0, common_1.Post)('upload-avatar'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "uploadAvatar", null);
__decorate([
    (0, common_1.UseGuards)(jwt_service_1.JwtService),
    (0, swagger_1.ApiSecurity)('JWT-auth'),
    (0, common_1.Put)('update/:userId'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User, String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    (0, swagger_1.ApiTags)('user'),
    __metadata("design:paramtypes", [user_service_1.UsersService,
        nodemailer_service_1.NodeMailerService,
        cloudinary_service_1.CloudinaryService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map