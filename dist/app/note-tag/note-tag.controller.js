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
exports.NoteTagController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const note_tag_service_1 = require("./note-tag.service");
const camelcase_util_1 = require("../../utils/camelcase.util");
const note_tag_entity_1 = require("../entities/note-tag.entity");
let NoteTagController = class NoteTagController {
    constructor(noteTagService) {
        this.noteTagService = noteTagService;
    }
    async getNoteTags() {
        const data = await this.noteTagService.getNoteTags();
        const noteTagsData = (0, camelcase_util_1.snakeCaseKeys)(note_tag_entity_1.NoteTag, data);
        return noteTagsData;
    }
    async createNoteTag(request) {
        return await this.noteTagService.createNoteTag(request);
    }
};
__decorate([
    (0, common_1.Get)('tags'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteTagController.prototype, "getNoteTags", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_tag_entity_1.NoteTag]),
    __metadata("design:returntype", Promise)
], NoteTagController.prototype, "createNoteTag", null);
NoteTagController = __decorate([
    (0, swagger_1.ApiTags)('note-tag'),
    (0, common_1.Controller)('note-tag'),
    __metadata("design:paramtypes", [note_tag_service_1.NoteTagService])
], NoteTagController);
exports.NoteTagController = NoteTagController;
//# sourceMappingURL=note-tag.controller.js.map