import { Todo } from '@app/entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TodoDTO } from './dto/todo-update-request.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  public async getAllTodos(): Promise<Todo[] | null> {
    return await this.todoRepository.find();
  }

  public async createTodos(request: Todo): Promise<Todo | null> {
    request.createdAt = new Date().toISOString();
    return await this.todoRepository.save(request);
  }

  public async updateTodos(
    request: TodoDTO[],
    noteId: number,
  ): Promise<boolean> {
    for (const todo of request) {
      if (
        !(await this.todoRepository.findOne({
          where: { todoUuid: todo.todoUuid },
        }))
      ) {
        const payloadTodo = { ...todo, note: { noteId: noteId } };
        await this.todoRepository.save(payloadTodo);
      } else {
        if (todo.isDelete) {
          await this.todoRepository.delete(todo.todoId);
        } else {
          await this.todoRepository.update(
            {
              todoUuid: todo.todoUuid,
            },
            {
              label: todo.label,
              status: todo.status,
              trim: todo.trim,
            },
          );
        }
      }
    }
    return true;
  }
}
