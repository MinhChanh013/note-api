import { Note } from './note.entity';
import { Tag } from './tag.entity';
import { Sticky } from './sticky.entity';
export declare class User {
    id?: number;
    full_name?: string;
    email: string;
    password: string;
    avatar: string;
    background: string;
    notes: Note[];
    tags: Tag[];
    stickys: Sticky[];
    created_at: string;
}
