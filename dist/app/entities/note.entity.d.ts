import { Todo } from './todo.entity';
import { NoteTag } from './note-tag.entity';
import { User } from './user.entity';
export declare class Note {
    noteId?: number;
    title: string;
    timeFrom: string;
    timeTo: string;
    description: string;
    cover: string;
    todos: Todo[];
    user: User;
    tags: NoteTag[];
    createdAt: string;
}
