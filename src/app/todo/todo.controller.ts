import { Controller, Get, HttpCode, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TodoService } from './todo.service';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { Todo } from '@app/entities/todo.entity';

@ApiTags('todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get('todos')
  @HttpCode(200)
  public async getAllTodos(): Promise<Todo[] | object> {
    const data = await this.todoService.getAllTodos();
    // convert camelCase to snake_case
    const todosData = snakeCaseKeys(Todo, data as Todo[]);
    return todosData;
  }
}
