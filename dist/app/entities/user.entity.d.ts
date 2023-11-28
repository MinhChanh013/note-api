import { Note } from './note.entity';
export declare class User {
    id?: number;
    full_name?: string;
    email: string;
    password: string;
    notes: Note[];
    created_at: string;
}
