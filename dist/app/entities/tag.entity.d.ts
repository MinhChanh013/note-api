import { NoteTag } from './note-tag.entity';
import { User } from './user.entity';
export declare class Tag {
    tagId?: number;
    label: string;
    cover: string;
    color: string;
    user: User;
    notes: NoteTag[];
    createdAt: string;
}
