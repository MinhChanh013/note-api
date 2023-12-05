import { User } from '@app/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    private jwtService;
    constructor(userRepository: Repository<User>, jwtService: JwtService);
    registerUser(request: User): Promise<{
        password: any;
        created_at: string;
        id?: number;
        full_name?: string;
        email: string;
        avatar: string;
        background: string;
        notes: import("../entities/note.entity").Note[];
        tags: import("../entities/tag.entity").Tag[];
    } & User>;
    checkEmail(request: User): Promise<boolean>;
    login(request: User): Promise<{
        access_token: string;
    }>;
    getUserInfor(request: User): Promise<User>;
    updateUser(request: User, userId: string): Promise<boolean>;
}
