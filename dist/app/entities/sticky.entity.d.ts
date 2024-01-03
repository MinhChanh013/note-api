import { User } from './user.entity';
export declare class Sticky {
    id?: number;
    content: string;
    uuid: string;
    cover: string;
    position: string;
    minimize: boolean;
    index: number;
    user: User;
    createdAt: string;
}
