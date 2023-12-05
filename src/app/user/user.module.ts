import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/entities/user.entity';
import { UserController } from './user.controller';
import { JwtModule } from '@nestjs/jwt';
import { NodeMailerService } from '@libs/infrastructure/nodemailer/nodemailer.service';
import { CloudinaryService } from '@libs/infrastructure/cloudinary/cloudinary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [UsersService, NodeMailerService, CloudinaryService],
  controllers: [UserController],
  exports: [UsersService],
})
export class UsersModule {}
