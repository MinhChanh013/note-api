import { Todo } from '@app/entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

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
}
