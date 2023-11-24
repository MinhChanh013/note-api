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
exports.TodoDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class TodoDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        name: 'todo_id',
    }),
    __metadata("design:type", Number)
], TodoDTO.prototype, "todoId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        name: 'note_id',
    }),
    __metadata("design:type", Number)
], TodoDTO.prototype, "noteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'ff18819f-0abe-4679-9d0d-54d70b29ecd5',
    }),
    __metadata("design:type", String)
], TodoDTO.prototype, "todoUuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Họp hội nghị',
    }),
    __metadata("design:type", String)
], TodoDTO.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    __metadata("design:type", Number)
], TodoDTO.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    __metadata("design:type", Number)
], TodoDTO.prototype, "trim", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '0',
    }),
    (0, swagger_1.ApiProperty)({
        type: Boolean,
        name: 'is_delete',
    }),
    __metadata("design:type", Boolean)
], TodoDTO.prototype, "isDelete", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        name: 'created_at',
    }),
    __metadata("design:type", String)
], TodoDTO.prototype, "createdAt", void 0);
exports.TodoDTO = TodoDTO;
//# sourceMappingURL=todo-update-request.dto.js.map