import { Todo } from '@app/entities/todo.entity';
import { Repository } from 'typeorm';
import { TodoDTO } from './dto/todo-update-request.dto';
export declare class TodoService {
    private todoRepository;
    constructor(todoRepository: Repository<Todo>);
    getAllTodos(): Promise<Todo[] | null>;
    createTodos(request: Todo): Promise<Todo | null>;
    updateTodos(request: TodoDTO[], noteId: number): Promise<boolean>;
}
