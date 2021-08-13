import { CreateTodoDto } from './dtos/createTodo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';
import { Todo } from './entities/todo.entity';
import { TodoService } from './todo.service';
export declare class TodoController {
    private readonly todoServices;
    constructor(todoServices: TodoService);
    createTodo(createTodoDto: CreateTodoDto): Promise<CreateTodoDto & Todo>;
    getTodos(): Promise<Todo[]>;
    updateTodo(param: {
        todoId: string;
    }, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    deleteTodo(param: {
        todoId: string;
    }): Promise<import("typeorm").DeleteResult>;
    toggleComplete(param: {
        todoId: string;
    }): Promise<void>;
}
