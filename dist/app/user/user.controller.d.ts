import { UsersService } from './user.service';
import { User } from '@app/entities/user.entity';
export declare class UserController {
    private userService;
    constructor(userService: UsersService);
    register(request?: User): Promise<{
        password: any;
        created_at: string;
        id?: number;
        full_name?: string;
        email: string;
    } & User>;
    login(request?: User): Promise<{
        access_token: string;
    }>;
    getUserInfor(request: any): Promise<{
        user_infor: User;
    }>;
}
