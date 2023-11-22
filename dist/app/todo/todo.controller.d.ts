import { TodoService } from './todo.service';
import { Todo } from '@app/entities/todo.entity';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    getAllTodos(): Promise<Todo[] | object>;
    createTodos(request: Todo): Promise<Todo | object>;
}
