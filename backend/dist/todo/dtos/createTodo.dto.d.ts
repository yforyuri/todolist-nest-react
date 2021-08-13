import { Todo } from "../entities/todo.entity";
declare const CreateTodoDto_base: import("@nestjs/common").Type<Pick<Todo, "title" | "desc">>;
export declare class CreateTodoDto extends CreateTodoDto_base {
}
export {};
