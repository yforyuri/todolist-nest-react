import { Repository } from 'typeorm';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { UpdateTodoDto } from './dtos/updateTodo.dto';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    createTodo(CreateTodoDto: CreateTodoDto): Promise<CreateTodoDto & Todo>;
    getTodos(): Promise<Todo[]>;
    updateTodo(param: any, updateTodoDto: UpdateTodoDto): Promise<Todo>;
    deleteTodo(param: {
        todoId: string;
    }): Promise<import("typeorm").DeleteResult>;
    toggleComplete(param: {
        todoId: string;
    }): Promise<void>;
}
