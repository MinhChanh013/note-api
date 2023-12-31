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
exports.TypeOrmConfigService = void 0;
const note_tag_entity_1 = require("../entities/note-tag.entity");
const note_entity_1 = require("../entities/note.entity");
const sticky_entity_1 = require("../entities/sticky.entity");
const tag_entity_1 = require("../entities/tag.entity");
const todo_entity_1 = require("../entities/todo.entity");
const user_entity_1 = require("../entities/user.entity");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let TypeOrmConfigService = class TypeOrmConfigService {
    constructor(config) {
        this.config = config;
    }
    createTypeOrmOptions() {
        return {
            type: 'postgres',
            host: this.config.get('DB_HOST'),
            port: this.config.get('DB_PORT'),
            username: this.config.get('DB_USERNAME'),
            password: this.config.get('DB_PASSWORD'),
            database: this.config.get('DB_NAME'),
            ssl: {
                ca: this.config.get('CA_SSL_PATH'),
                rejectUnauthorized: false,
            },
            entities: [user_entity_1.User, note_entity_1.Note, todo_entity_1.Todo, tag_entity_1.Tag, note_tag_entity_1.NoteTag, sticky_entity_1.Sticky],
            synchronize: false,
        };
    }
};
TypeOrmConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], TypeOrmConfigService);
exports.TypeOrmConfigService = TypeOrmConfigService;
//# sourceMappingURL=postgresdb.config.service.js.map