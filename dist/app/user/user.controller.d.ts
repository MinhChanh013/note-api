import { UsersService } from './user.service';
import { User } from '@app/entities/user.entity';
import { NoteMailDTO } from '@libs/infrastructure/nodemailer/dto/notemailer.dto';
import { NodeMailerService } from '@libs/infrastructure/nodemailer/nodemailer.service';
export declare class UserController {
    private userService;
    private notemailService;
    constructor(userService: UsersService, notemailService: NodeMailerService);
    register(request?: User): Promise<{
        password: any;
        created_at: string;
        id?: number;
        full_name?: string;
        email: string;
        notes: import("../entities/note.entity").Note[];
    } & User>;
    checkEmail(request?: User): Promise<boolean>;
    login(request?: User): Promise<{
        access_token: string;
    }>;
    SendEmail(request?: NoteMailDTO): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    getUserInfor(request: any): Promise<{
        user_infor: User;
    }>;
}
