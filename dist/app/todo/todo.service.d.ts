import { Todo } from '@app/entities/todo.entity';
import { Repository } from 'typeorm';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    getAllTodos(): Promise<Todo[] | null>;
    createTodos(request: Todo): Promise<Todo | null>;
}
