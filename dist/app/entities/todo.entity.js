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
exports.Todo = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const note_entity_1 = require("./note.entity");
let Todo = class Todo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)({ name: 'todo_id' }),
    __metadata("design:type", Number)
], Todo.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ff18819f-0abe-4679-9d0d-54d70b29ecd5',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "todoUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Họp hội nghị',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Todo.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Todo.prototype, "trim", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => note_entity_1.Note, (note) => note.todos),
    (0, typeorm_1.JoinColumn)({ name: 'note' }),
    __metadata("design:type", note_entity_1.Note)
], Todo.prototype, "note", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Todo.prototype, "createdAt", void 0);
Todo = __decorate([
    (0, typeorm_1.Entity)({ name: 'todo' })
], Todo);
exports.Todo = Todo;
//# sourceMappingURL=todo.entity.js.map