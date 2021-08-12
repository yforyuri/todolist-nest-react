import { Body, Controller, Post } from '@nestjs/common';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoServices: TodoService) {}

    @Post()
    async createTodo(@Body() createTodoDto: CreateTodoDto) {
      return await this.todoServices.createTodo(createTodoDto);
    }
  }