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
exports.NoteTagService = void 0;
const note_tag_entity_1 = require("../entities/note-tag.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let NoteTagService = class NoteTagService {
    constructor(noteTagRepository) {
        this.noteTagRepository = noteTagRepository;
    }
    async getNoteTags() {
        return await this.noteTagRepository
            .createQueryBuilder('note-tag')
            .leftJoinAndSelect('note-tag.tag', 'tags')
            .leftJoinAndSelect('note-tag.note', 'notes')
            .getMany();
    }
    async createNoteTag(request) {
        return await this.noteTagRepository.save(request);
    }
    async updateNoteTag(request, nodeId) {
        for (const noteTag of request) {
            if (!noteTag.id) {
                const payloadNoteTag = {
                    note: { noteId: nodeId },
                    tag: { tagId: noteTag.tagId },
                    createdAt: new Date().toISOString(),
                };
                await this.noteTagRepository.save(payloadNoteTag);
            }
            else {
                if (noteTag.isDelete) {
                    await this.noteTagRepository.delete(noteTag.id);
                }
            }
        }
        return true;
    }
};
NoteTagService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_tag_entity_1.NoteTag)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoteTagService);
exports.NoteTagService = NoteTagService;
//# sourceMappingURL=note-tag.service.js.map