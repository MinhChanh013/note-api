"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteTagModule = void 0;
const common_1 = require("@nestjs/common");
const note_tag_service_1 = require("./note-tag.service");
const note_tag_controller_1 = require("./note-tag.controller");
const typeorm_1 = require("@nestjs/typeorm");
const note_tag_entity_1 = require("../entities/note-tag.entity");
let NoteTagModule = class NoteTagModule {
};
NoteTagModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([note_tag_entity_1.NoteTag])],
        providers: [note_tag_service_1.NoteTagService],
        controllers: [note_tag_controller_1.NoteTagController],
        exports: [note_tag_service_1.NoteTagService],
    })
], NoteTagModule);
exports.NoteTagModule = NoteTagModule;
//# sourceMappingURL=note-tag.module.js.map