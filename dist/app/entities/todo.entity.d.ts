import { Note } from './note.entity';
export declare class Todo {
    todoId?: number;
    todoUuid: string;
    label: string;
    status: number;
    trim: number;
    note: Note;
    createdAt: string;
}
