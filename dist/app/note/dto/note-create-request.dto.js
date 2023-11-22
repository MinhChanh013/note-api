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
exports.NoteCreateRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
let NoteCreateRequest = class NoteCreateRequest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)({ name: 'note_id' }),
    __metadata("design:type", Number)
], NoteCreateRequest.prototype, "noteId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Công việc trong ngày',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-07-28 08:00:00',
    }),
    (0, class_transformer_1.Expose)({ name: 'time_from' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "timeFrom", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '2023-07-28 17:30:00',
    }),
    (0, class_transformer_1.Expose)({ name: 'time_to' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "timeTo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Hoàn thành các công việc và lập báo cáo.',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#4BCE97',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "cover", void 0);
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
    __metadata("design:type", Array)
], NoteCreateRequest.prototype, "todos", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            {
                label: 'Meeting',
                cover: '#4BCE97',
            },
        ],
    }),
    __metadata("design:type", Array)
], NoteCreateRequest.prototype, "tags", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], NoteCreateRequest.prototype, "createdAt", void 0);
NoteCreateRequest = __decorate([
    (0, typeorm_1.Entity)({ name: 'note' })
], NoteCreateRequest);
exports.NoteCreateRequest = NoteCreateRequest;
//# sourceMappingURL=note-create-request.dto.js.map