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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const todo_service_1 = require("./todo.service");
const camelcase_util_1 = require("../../utils/camelcase.util");
const todo_entity_1 = require("../entities/todo.entity");
let TodoController = class TodoController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    async getAllTodos() {
        const data = await this.todoService.getAllTodos();
        const todosData = (0, camelcase_util_1.snakeCaseKeys)(todo_entity_1.Todo, data);
        return todosData;
    }
    async createTodos(request) {
        const data = await this.todoService.createTodos(request);
        const todosData = (0, camelcase_util_1.snakeCaseKeys)(todo_entity_1.Todo, data);
        return todosData;
    }
};
__decorate([
    (0, common_1.Get)('todos'),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getAllTodos", null);
__decorate([
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOkResponse)({
        description: 'Create new todos',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [todo_entity_1.Todo]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodos", null);
TodoController = __decorate([
    (0, swagger_1.ApiTags)('todo'),
    (0, common_1.Controller)('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map