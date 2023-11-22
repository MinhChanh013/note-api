import { Note } from './note.entity';
import { Tag } from './tag.entity';
export declare class NoteTag {
    id?: number;
    note: Note;
    tag: Tag;
    createdAt: string;
}
