import { Todo } from '../entities/todo.entity';
declare const UpdateTodoDto_base: import("@nestjs/common").Type<Pick<Todo, "title" | "desc">>;
export declare class UpdateTodoDto extends UpdateTodoDto_base {
    title: string;
    desc: string;
}
export {};
