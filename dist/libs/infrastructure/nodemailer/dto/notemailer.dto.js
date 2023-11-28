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
exports.NoteMailDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class NoteMailDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'minhchanh1910@gmail.com',
    }),
    __metadata("design:type", String)
], NoteMailDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Confirm OTP code for forgot password account',
    }),
    __metadata("design:type", String)
], NoteMailDTO.prototype, "subject", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '<p>Hello wordls</p>',
    }),
    __metadata("design:type", String)
], NoteMailDTO.prototype, "body", void 0);
exports.NoteMailDTO = NoteMailDTO;
//# sourceMappingURL=notemailer.dto.js.map