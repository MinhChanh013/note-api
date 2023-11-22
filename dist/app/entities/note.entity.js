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
exports.Note = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const todo_entity_1 = require("./todo.entity");
const note_tag_entity_1 = require("./note-tag.entity");
let Note = class Note {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)({ name: 'note_id' }),
    __metadata("design:type", Number)
], Note.prototype, "noteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Công việc trong ngày',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-07-28 08:30:00+07:00',
    }),
    (0, class_transformer_1.Expose)({ name: 'time_from' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "timeFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-07-28 17:30:00+07:00',
    }),
    (0, class_transformer_1.Expose)({ name: 'time_to' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "timeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Hoàn thành các công việc và lập báo cáo.',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#4BCE97',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "cover", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                label: 'Họp hội nghị',
                status: 0,
                trim: 0,
            },
        ],
    }),
    (0, typeorm_1.OneToMany)(() => todo_entity_1.Todo, (todo) => todo.note),
    __metadata("design:type", Array)
], Note.prototype, "todos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                label: 'Meeting',
                cover: '#4BCE97',
            },
        ],
    }),
    (0, typeorm_1.OneToMany)(() => note_tag_entity_1.NoteTag, (noteTag) => noteTag.note),
    __metadata("design:type", Array)
], Note.prototype, "tags", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Note.prototype, "createdAt", void 0);
Note = __decorate([
    (0, typeorm_1.Entity)({ name: 'note' })
], Note);
exports.Note = Note;
//# sourceMappingURL=note.entity.js.map