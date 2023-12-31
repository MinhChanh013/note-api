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
exports.TagService = void 0;
const tag_entity_1 = require("../entities/tag.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TagService = class TagService {
    constructor(tagRepository) {
        this.tagRepository = tagRepository;
    }
    async getTags(request) {
        return await this.tagRepository.find({
            where: { user: { id: request.id } },
        });
    }
    async createTag(request, requestUser) {
        const payload = Object.assign(Object.assign({}, request), { createdAt: new Date().toISOString(), user: requestUser });
        return await this.tagRepository.save(payload);
    }
    async updateTag(request, tagId) {
        const tagIdNumber = parseInt(tagId);
        await this.tagRepository.update({
            tagId: tagIdNumber,
        }, {
            label: request.label,
            cover: request.cover,
            color: request.color,
        });
        return true;
    }
    async removeTag(tagId) {
        await this.tagRepository.delete({ tagId: parseInt(tagId) });
        return true;
    }
};
TagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(tag_entity_1.Tag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TagService);
exports.TagService = TagService;
//# sourceMappingURL=tag.service.js.map