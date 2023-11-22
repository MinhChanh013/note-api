import { Todo } from './todo.entity';
import { NoteTag } from './note-tag.entity';
export declare class Note {
    noteId?: number;
    title: string;
    timeFrom: string;
    timeTo: string;
    description: string;
    cover: string;
    todos: Todo[];
    tags: NoteTag[];
    createdAt: string;
}
