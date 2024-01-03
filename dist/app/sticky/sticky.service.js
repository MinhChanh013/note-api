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
exports.StickyService = void 0;
const sticky_entity_1 = require("../entities/sticky.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let StickyService = class StickyService {
    constructor(stickyRepository) {
        this.stickyRepository = stickyRepository;
    }
    async getStickys(request) {
        return await this.stickyRepository
            .createQueryBuilder('sticky')
            .leftJoinAndSelect('sticky.user', 'user')
            .orderBy('sticky.createdAt', 'DESC')
            .where('user.id = :userId', {
            userId: request.id,
        })
            .getMany();
    }
};
StickyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sticky_entity_1.Sticky)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StickyService);
exports.StickyService = StickyService;
//# sourceMappingURL=sticky.service.js.map