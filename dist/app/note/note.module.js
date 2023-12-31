"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteModule = void 0;
const common_1 = require("@nestjs/common");
const note_controller_1 = require("./note.controller");
const note_service_1 = require("./note.service");
const typeorm_1 = require("@nestjs/typeorm");
const note_entity_1 = require("../entities/note.entity");
const todo_module_1 = require("../todo/todo.module");
const note_tag_module_1 = require("../note-tag/note-tag.module");
const jwt_1 = require("@nestjs/jwt");
let NoteModule = class NoteModule {
};
NoteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([note_entity_1.Note]),
            todo_module_1.TodoModule,
            note_tag_module_1.NoteTagModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
            }),
        ],
        controllers: [note_controller_1.NoteController],
        providers: [note_service_1.NoteService],
    })
], NoteModule);
exports.NoteModule = NoteModule;
//# sourceMappingURL=note.module.js.map