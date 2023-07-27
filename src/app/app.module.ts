import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { UsersModule } from './user/user.module';

@Module({
  imports: [ConfigModule, UsersModule],
})
export class AppModule {}
