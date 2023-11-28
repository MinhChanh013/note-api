import { ConfigService } from '@nestjs/config';
import { NoteMailDTO } from './dto/notemailer.dto';
export declare class NodeMailerService {
    private readonly config;
    constructor(config: ConfigService);
    sendEmail(request: NoteMailDTO): Promise<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
}
