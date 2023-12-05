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
exports.Tag = void 0;
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const note_tag_entity_1 = require("./note-tag.entity");
const user_entity_1 = require("./user.entity");
let Tag = class Tag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, class_transformer_1.Expose)({ name: 'tag_id' }),
    __metadata("design:type", Number)
], Tag.prototype, "tagId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'Meeting',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tag.prototype, "label", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '#4BCE97',
    }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tag.prototype, "cover", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tag.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.notes),
    (0, typeorm_1.JoinColumn)({ name: 'user' }),
    __metadata("design:type", user_entity_1.User)
], Tag.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => note_tag_entity_1.NoteTag, (noteTag) => noteTag.tag),
    __metadata("design:type", Array)
], Tag.prototype, "notes", void 0);
__decorate([
    (0, class_transformer_1.Expose)({ name: 'created_at' }),
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Tag.prototype, "createdAt", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)({ name: 'tag' })
], Tag);
exports.Tag = Tag;
//# sourceMappingURL=tag.entity.js.map