import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { NoteMailDTO } from './dto/notemailer.dto';

@Injectable()
export class NodeMailerService {
  constructor(private readonly config: ConfigService) {}

  async sendEmail(request: NoteMailDTO) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.get('USER_MAIL'),
        pass: this.config.get('PASS_MAIL'),
      },
    });

    // send mail with defined transport object
    return await transporter.sendMail({
      from: this.config.get('USER_MAIL'), // sender address
      to: request.email, // list of receivers
      subject: request.subject, // Subject line
      html: request.body, // html body
    });
  }
}
