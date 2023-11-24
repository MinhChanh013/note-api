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
exports.NoteUpdateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class NoteUpdateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        name: 'note_id',
        example: 1,
    }),
    __metadata("design:type", Number)
], NoteUpdateDTO.prototype, "noteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Công việc trong ngày',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '2023-07-28 08:00:00',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "timeFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '2023-07-28 08:00:00',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "timeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Hoàn thành các công việc và lập báo cáo.',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '#4BCE97',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "cover", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        name: 'created_at',
    }),
    __metadata("design:type", String)
], NoteUpdateDTO.prototype, "createdAt", void 0);
exports.NoteUpdateDTO = NoteUpdateDTO;
//# sourceMappingURL=note-update-request.dto.js.map