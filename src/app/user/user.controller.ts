import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
  Put,
  Param,
} from '@nestjs/common';

import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { UsersService } from './user.service';
import { User } from '@app/entities/user.entity';
import { JwtService } from '@libs/infrastructure/jwt/jwt.service';
import { NoteMailDTO } from '@libs/infrastructure/nodemailer/dto/notemailer.dto';
import { NodeMailerService } from '@libs/infrastructure/nodemailer/nodemailer.service';
import { CloudinaryService } from '@libs/infrastructure/cloudinary/cloudinary.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(
    private userService: UsersService,
    private notemailService: NodeMailerService,
    private cloudinaryService: CloudinaryService,
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

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Post('upload-background')
  async uploadBackground(
    @Request() requestUser: any,
    @Body() request?: { url: string },
  ) {
    const urlBackground = await this.cloudinaryService.uploadImage(request);
    const userData = await this.userService.getUserInfor(requestUser.user);
    const dataRequest = {
      ...userData,
      background: urlBackground,
    };
    await this.userService.updateUser(dataRequest, requestUser.user.id);
    return urlBackground;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Post('upload-avatar')
  async uploadAvatar(
    @Request() requestUser: any,
    @Body() request?: { url: string },
  ) {
    const urlAvatar = await this.cloudinaryService.uploadImage(request);
    const userData = await this.userService.getUserInfor(requestUser.user);
    const dataRequest = {
      ...userData,
      avatar: urlAvatar,
    };
    await this.userService.updateUser(dataRequest, requestUser.user.id);
    return urlAvatar;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Put('update/:userId')
  async updateUser(@Body() request: User, @Param('userId') userId: string) {
    const data = await this.userService.updateUser(request, userId);
    return data;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Put('update-password/:userId')
  async updatePassword(
    @Body() request: { currentPassword: string; newPassword: string },
    @Param('userId') userId: string,
  ) {
    const data = await this.userService.updatePassword(request, userId);
    return data;
  }
}
