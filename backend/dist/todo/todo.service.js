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
exports.TodoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const todo_entity_1 = require("./entities/todo.entity");
let TodoService = class TodoService {
    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }
    async createTodo(CreateTodoDto) {
        return await this.todoRepository.save(CreateTodoDto);
    }
    async getTodos() {
        return await this.todoRepository.find();
    }
    async updateTodo(param, updateTodoDto) {
        const todo = await this.todoRepository.findOne({
            where: {
                id: param.todoId,
            },
        });
        if (!updateTodoDto.title && !updateTodoDto.desc) {
            throw new common_1.HttpException('한 가지 이상의 값이 필요합니다', common_1.HttpStatus.FORBIDDEN);
        }
        todo.title = updateTodoDto.title;
        todo.desc = updateTodoDto.desc;
        return this.todoRepository.save(todo);
    }
    async deleteTodo(param) {
        return await this.todoRepository.delete(param.todoId);
    }
    async toggleComplete(param) {
        const toddo = await this.todoRepository.findOne({
            where: {
                id: +param.todoId
            },
        });
    }
};
TodoService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(todo_entity_1.Todo)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TodoService);
exports.TodoService = TodoService;
//# sourceMappingURL=todo.service.js.map