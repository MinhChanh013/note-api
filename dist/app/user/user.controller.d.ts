import { UsersService } from './user.service';
import { User } from '@app/entities/user.entity';
import { NoteMailDTO } from '@libs/infrastructure/nodemailer/dto/notemailer.dto';
import { NodeMailerService } from '@libs/infrastructure/nodemailer/nodemailer.service';
import { CloudinaryService } from '@libs/infrastructure/cloudinary/cloudinary.service';
export declare class UserController {
    private userService;
    private notemailService;
    private cloudinaryService;
    constructor(userService: UsersService, notemailService: NodeMailerService, cloudinaryService: CloudinaryService);
    register(request?: User): Promise<{
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
    checkEmail(request?: User): Promise<boolean>;
    login(request?: User): Promise<{
        access_token: string;
    }>;
    SendEmail(request?: NoteMailDTO): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    getUserInfor(request: any): Promise<User>;
    uploadBackground(requestUser: any, request?: {
        url: string;
    }): Promise<string>;
    uploadAvatar(requestUser: any, request?: {
        url: string;
    }): Promise<string>;
    updateUser(request: User, userId: string): Promise<boolean>;
    updatePassword(request: {
        currentPassword: string;
        newPassword: string;
    }, userId: string): Promise<boolean>;
}
