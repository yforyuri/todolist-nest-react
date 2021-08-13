"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodoDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const todo_entity_1 = require("../entities/todo.entity");
class CreateTodoDto extends swagger_1.PickType(todo_entity_1.Todo, ['title', 'desc']) {
}
exports.CreateTodoDto = CreateTodoDto;
//# sourceMappingURL=createTodo.dto.js.map