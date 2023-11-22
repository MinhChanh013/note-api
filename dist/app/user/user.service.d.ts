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
    } & User>;
    login(request: User): Promise<{
        access_token: string;
    }>;
    getUserInfor(request: User): Promise<{
        user_infor: User;
    }>;
}
