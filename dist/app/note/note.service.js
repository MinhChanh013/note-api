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
exports.NoteService = void 0;
const note_entity_1 = require("../entities/note.entity");
const note_tag_service_1 = require("../note-tag/note-tag.service");
const todo_service_1 = require("../todo/todo.service");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const camelcase_util_1 = require("../../utils/camelcase.util");
let NoteService = class NoteService {
    constructor(noteRepository, todoService, noteTagService) {
        this.noteRepository = noteRepository;
        this.todoService = todoService;
        this.noteTagService = noteTagService;
    }
    async getNotes(request) {
        const data = await this.noteRepository
            .createQueryBuilder('note')
            .leftJoinAndSelect('note.todos', 'todo')
            .leftJoinAndSelect('note.tags', 'note-tag')
            .leftJoinAndSelect('note-tag.tag', 'tag')
            .leftJoinAndSelect('note.user', 'user')
            .orderBy('note.createdAt', 'DESC')
            .where('user.id = :userId', {
            userId: request.id,
        })
            .getMany();
        const notesData = (0, camelcase_util_1.snakeCaseKeys)(note_entity_1.Note, data);
        const newNoteData = notesData.map((note) => (Object.assign(Object.assign({}, note), { tags: note.tags.map((noteTag) => {
                return Object.assign({ id: noteTag.id }, noteTag.tag);
            }) })));
        return newNoteData;
    }
    async getNote(noteId) {
        const data = await this.noteRepository
            .createQueryBuilder('note')
            .leftJoinAndSelect('note.todos', 'todo')
            .leftJoinAndSelect('note.tags', 'note-tag')
            .leftJoinAndSelect('note-tag.tag', 'tag')
            .orderBy('note.createdAt', 'DESC')
            .where('note.noteId = :noteId', {
            noteId,
        })
            .getMany();
        const notesData = (0, camelcase_util_1.snakeCaseKeys)(note_entity_1.Note, data);
        const newNoteData = notesData.map((note) => (Object.assign(Object.assign({}, note), { tags: note.tags.map((noteTag) => {
                return Object.assign({ id: noteTag.id }, noteTag.tag);
            }) })))[0];
        return newNoteData;
    }
    async createNote(request) {
        request.createdAt = new Date().toISOString();
        const newNote = await this.noteRepository.save(request);
        if (newNote) {
            for (const todo of request.todos) {
                const payloadTodo = Object.assign(Object.assign({}, todo), { note: newNote });
                await this.todoService.createTodos(payloadTodo);
            }
            for (const tag of request.tags) {
                const payloadNoteTag = {
                    note: request,
                    tag: tag,
                    createdAt: new Date().toISOString(),
                };
                await this.noteTagService.createNoteTag(payloadNoteTag);
            }
            return Object.assign(Object.assign({}, newNote), { todos: request.todos });
        }
    }
    async deleteNote(idNote) {
        const data = await this.noteRepository.delete(idNote);
        return data;
    }
    async updateNote(noteId, request) {
        const nodeIdNumber = Number(noteId);
        await this.noteRepository.update({
            noteId: nodeIdNumber,
        }, {
            title: request.title,
            timeFrom: request.timeFrom,
            timeTo: request.timeTo,
            description: request.description,
            cover: request.cover,
        });
        await this.todoService.updateTodos(request.todos, nodeIdNumber);
        await this.noteTagService.updateNoteTag(request.tags, nodeIdNumber);
        return true;
    }
};
NoteService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(note_entity_1.Note)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        todo_service_1.TodoService,
        note_tag_service_1.NoteTagService])
], NoteService);
exports.NoteService = NoteService;
//# sourceMappingURL=note.service.js.map