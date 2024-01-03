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
exports.Sticky = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const user_entity_1 = require("./user.entity");
let Sticky = class Sticky {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Sticky.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Meeting',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sticky.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '569bd40f-0aac-4648-955d-afdd614924fb',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sticky.prototype, "uuid", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#4BCE97',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sticky.prototype, "cover", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'left-0 top-0',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sticky.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: false,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Boolean)
], Sticky.prototype, "minimize", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 0,
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Sticky.prototype, "index", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.notes),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", user_entity_1.User)
], Sticky.prototype, "user", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Sticky.prototype, "createdAt", void 0);
Sticky = __decorate([
    (0, typeorm_1.Entity)({ name: 'sticky' })
], Sticky);
exports.Sticky = Sticky;
//# sourceMappingURL=sticky.entity.js.map