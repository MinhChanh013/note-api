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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteTag = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const note_entity_1 = require("./note.entity");
const tag_entity_1 = require("./tag.entity");
let NoteTag = class NoteTag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NoteTag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => note_entity_1.Note, (note) => note.tags),
    (0, typeorm_1.JoinColumn)({ name: 'note' }),
    __metadata("design:type", note_entity_1.Note)
], NoteTag.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tag_entity_1.Tag, (tag) => tag.notes),
    (0, typeorm_1.JoinColumn)({ name: 'tag' }),
    __metadata("design:type", tag_entity_1.Tag)
], NoteTag.prototype, "tag", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteTag.prototype, "createdAt", void 0);
NoteTag = __decorate([
    (0, typeorm_1.Entity)({ name: 'note-tag' })
], NoteTag);
exports.NoteTag = NoteTag;
//# sourceMappingURL=note-tag.entity.js.map