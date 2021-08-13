import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTodoDto } from './dtos/createTodo.dto';
import { TodoService } from './todo.service';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
    constructor(private readonly todoServices: TodoService) {}

    @Post()
    async createTodo(@Body() createTodoDto: CreateTodoDto) {
      return await this.todoServices.createTodo(createTodoDto);
    }
  }