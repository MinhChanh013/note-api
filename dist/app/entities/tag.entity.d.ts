import { NoteTag } from './note-tag.entity';
export declare class Tag {
    tagId?: number;
    label: string;
    cover: string;
    color: string;
    notes: NoteTag[];
    createdAt: string;
}
