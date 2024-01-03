import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/config/config.module';
import { UsersModule } from './user/user.module';
import { NoteModule } from './note/note.module';
import { TodoModule } from './todo/todo.module';
import { TagModule } from './tag/tag.module';
import { NoteTagModule } from './note-tag/note-tag.module';
import { StickyModule } from './sticky/sticky.module';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    NoteModule,
    TodoModule,
    TagModule,
    NoteTagModule,
    StickyModule,
  ],
  providers: [],
  controllers: [],
})
export class AppModule {}
