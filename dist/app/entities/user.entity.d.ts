import { Note } from './note.entity';
import { Tag } from './tag.entity';
export declare class User {
    id?: number;
    full_name?: string;
    email: string;
    password: string;
    avatar: string;
    background: string;
    notes: Note[];
    tags: Tag[];
    created_at: string;
}
