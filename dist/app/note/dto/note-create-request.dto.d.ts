import { Todo } from '@app/entities/todo.entity';
import { Tag } from '@app/entities/tag.entity';
export declare class NoteCreateRequest {
    noteId?: number;
    title: string;
    timeFrom: string;
    timeTo: string;
    description: string;
    cover: string;
    todos: Todo[];
    tags: Tag[];
    createdAt: string;
}
