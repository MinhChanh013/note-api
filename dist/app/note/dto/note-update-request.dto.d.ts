import { Tag } from '@app/entities/tag.entity';
import { TodoDTO } from '@app/todo/dto/todo-update-request.dto';
export declare class NoteUpdateDTO {
    noteId?: number;
    title: string;
    timeFrom: string;
    timeTo: string;
    description: string;
    cover: string;
    todos: TodoDTO[];
    tags: Tag[];
    createdAt: string;
}
