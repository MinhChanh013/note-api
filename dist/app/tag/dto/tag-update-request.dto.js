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
exports.TagUpdateDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class TagUpdateDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        example: 1,
        name: 'tag_Id',
    }),
    __metadata("design:type", Number)
], TagUpdateDTO.prototype, "tagId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: 'Meeting',
    }),
    __metadata("design:type", String)
], TagUpdateDTO.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '#4BCE97',
    }),
    __metadata("design:type", String)
], TagUpdateDTO.prototype, "cover", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        example: '#4BCE97',
    }),
    __metadata("design:type", String)
], TagUpdateDTO.prototype, "color", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        name: 'created_at',
    }),
    __metadata("design:type", String)
], TagUpdateDTO.prototype, "createdAt", void 0);
exports.TagUpdateDTO = TagUpdateDTO;
//# sourceMappingURL=tag-update-request.dto.js.map