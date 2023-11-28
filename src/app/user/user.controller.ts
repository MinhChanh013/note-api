import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';

import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { User } from '@app/entities/user.entity';
import { JwtService } from '@libs/infrastructure/jwt/jwt.service';
import { NoteMailDTO } from '@libs/infrastructure/nodemailer/dto/notemailer.dto';
import { NodeMailerService } from '@libs/infrastructure/nodemailer/nodemailer.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private userService: UsersService,
    private notemailService: NodeMailerService,
  ) {}

  @Post('register')
  async register(@Body() request?: User) {
    const data = await this.userService.registerUser(request);
    return data;
  }

  @Post('check-email')
  async checkEmail(@Body() request?: User) {
    const data = await this.userService.checkEmail(request);
    return data;
  }

  @Post('login')
  async login(@Body() request?: User) {
    const data = await this.userService.login(request);
    return data;
  }

  @Post('send-mail')
  async SendEmail(@Body() request?: NoteMailDTO) {
    const data = await this.notemailService.sendEmail(request);
    return data;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Get('user-infor')
  async getUserInfor(@Request() request: any) {
    const data = await this.userService.getUserInfor(request.user);
    return data;
  }
}
