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
exports.NoteController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const note_service_1 = require("./note.service");
const camelcase_util_1 = require("../../utils/camelcase.util");
const note_create_request_dto_1 = require("./dto/note-create-request.dto");
let NoteController = class NoteController {
    constructor(noteService) {
        this.noteService = noteService;
    }
    async getNotes() {
        const data = await this.noteService.getNotes();
        return data;
    }
    async getNote(noteId) {
        const data = await this.noteService.getNote(noteId);
        return data;
    }
    async createNote(request) {
        const data = await this.noteService.createNote(request);
        const noteData = (0, camelcase_util_1.snakeCaseKeys)(note_create_request_dto_1.NoteCreateRequest, data);
        return noteData;
    }
    async deleteNote(deleteNoteDto) {
        const data = await this.noteService.deleteNote(deleteNoteDto.idNote);
        return data;
    }
};
__decorate([
    (0, common_1.Get)('notes'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNotes", null);
__decorate([
    (0, common_1.Get)('note/:noteId'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Param)('noteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "getNote", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Create new note',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [note_create_request_dto_1.NoteCreateRequest]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "createNote", null);
__decorate([
    (0, common_1.Post)('delete'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Delete note',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NoteController.prototype, "deleteNote", null);
NoteController = __decorate([
    (0, swagger_1.ApiTags)('note'),
    (0, common_1.Controller)('note'),
    __metadata("design:paramtypes", [note_service_1.NoteService])
], NoteController);
exports.NoteController = NoteController;
//# sourceMappingURL=note.controller.js.map