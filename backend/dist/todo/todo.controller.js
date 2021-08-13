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
const createTodo_dto_1 = require("./dtos/createTodo.dto");
const updateTodo_dto_1 = require("./dtos/updateTodo.dto");
const todo_entity_1 = require("./entities/todo.entity");
const todo_service_1 = require("./todo.service");
let TodoController = class TodoController {
    constructor(todoServices) {
        this.todoServices = todoServices;
    }
    async createTodo(createTodoDto) {
        return await this.todoServices.createTodo(createTodoDto);
    }
    async getTodos() {
        return await this.todoServices.getTodos();
    }
    async updateTodo(param, updateTodoDto) {
        return await this.todoServices.updateTodo(param, updateTodoDto);
    }
    async deleteTodo(param) {
        return await this.todoServices.deleteTodo(param);
    }
    async toggleComplete(param) {
        return await this.todoServices.toggleComplete(param);
    }
};
__decorate([
    swagger_1.ApiResponse({
        status: 201,
        description: '투두 생성',
        type: todo_entity_1.Todo,
    }),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTodo_dto_1.CreateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    swagger_1.ApiResponse({
        status: 200,
        description: '투두 가져오기',
        type: [todo_entity_1.Todo],
    }),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodos", null);
__decorate([
    swagger_1.ApiParam({
        name: 'todoId',
        required: true,
        description: '투두리스트 아이디',
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: '투두 수정',
        type: todo_entity_1.Todo,
    }),
    common_1.Put(':todoId'),
    __param(0, common_1.Param()),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, updateTodo_dto_1.UpdateTodoDto]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
__decorate([
    swagger_1.ApiParam({
        name: 'todoId',
        required: true,
        description: '투두리스트 아이디',
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: '투두 삭제',
        type: todo_entity_1.Todo,
    }),
    common_1.Delete(':todoId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    swagger_1.ApiParam({
        name: 'todoId',
        required: true,
        description: '투두리스트 아이디',
    }),
    swagger_1.ApiResponse({
        status: 200,
        description: '투두 완료 처리',
        type: todo_entity_1.Todo,
    }),
    common_1.Put('complete/:todoId'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "toggleComplete", null);
TodoController = __decorate([
    swagger_1.ApiTags('todo'),
    common_1.Controller('todo'),
    __metadata("design:paramtypes", [todo_service_1.TodoService])
], TodoController);
exports.TodoController = TodoController;
//# sourceMappingURL=todo.controller.js.map