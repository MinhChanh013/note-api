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
exports.UsersService = void 0;
const user_entity_1 = require("../entities/user.entity");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const bcrypt_1 = require("bcrypt");
const typeorm_2 = require("typeorm");
let UsersService = class UsersService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async registerUser(request) {
        const { password, email } = request;
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (user)
            throw new common_1.HttpException('User is exits', 404);
        const created_at = new Date().toISOString();
        const hashpassword = await (0, bcrypt_1.hash)(password, 10);
        const payload = Object.assign(Object.assign({}, request), { password: hashpassword, created_at });
        const createdUser = await this.userRepository.save(payload);
        return createdUser;
    }
    async checkEmail(request) {
        const { email } = request;
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (user) {
            throw new common_1.HttpException('User is exits', 404);
        }
        return true;
    }
    async login(request) {
        const email = request.email;
        const user = await this.userRepository.findOne({ where: { email: email } });
        if (!user)
            throw new common_1.HttpException('User not found', 404);
        const isPasswordValid = await (0, bcrypt_1.compare)(request.password, user.password);
        if (!isPasswordValid)
            throw new common_1.HttpException('Password is incorrect', 400);
        const payload = { email: user.email, id: user.id };
        const token = await this.jwtService.signAsync(payload);
        return {
            access_token: token,
        };
    }
    async getUserInfor(request) {
        return {
            user_infor: request,
        };
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=user.service.js.map