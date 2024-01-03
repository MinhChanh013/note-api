import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StickyService } from './sticky.service';
import { StickyController } from './sticky.controller';
import { Sticky } from '@app/entities/sticky.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sticky]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  providers: [StickyService],
  controllers: [StickyController],
})
export class StickyModule {}
