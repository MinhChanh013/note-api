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
exports.TagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tag_service_1 = require("./tag.service");
const tag_entity_1 = require("../entities/tag.entity");
const camelcase_util_1 = require("../../utils/camelcase.util");
let TagController = class TagController {
    constructor(tagService) {
        this.tagService = tagService;
    }
    async getTags() {
        const data = await this.tagService.getTags();
        const tagsData = (0, camelcase_util_1.snakeCaseKeys)(tag_entity_1.Tag, data);
        return tagsData;
    }
    async createTag(request) {
        const data = await this.tagService.createTag(request);
        const tagsData = (0, camelcase_util_1.snakeCaseKeys)(tag_entity_1.Tag, data);
        return tagsData;
    }
};
__decorate([
    (0, common_1.Get)('tags'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TagController.prototype, "getTags", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tag_entity_1.Tag]),
    __metadata("design:returntype", Promise)
], TagController.prototype, "createTag", null);
TagController = __decorate([
    (0, swagger_1.ApiTags)('tag'),
    (0, common_1.Controller)('tag'),
    __metadata("design:paramtypes", [tag_service_1.TagService])
], TagController);
exports.TagController = TagController;
//# sourceMappingURL=tag.controller.js.map