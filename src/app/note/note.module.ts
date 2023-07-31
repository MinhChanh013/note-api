import { Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Note } from '@app/entities/note.entity';
import { TodoModule } from '@app/todo/todo.module';
import { NoteTagModule } from '@app/note-tag/note-tag.module';
@Module({
  imports: [TypeOrmModule.forFeature([Note]), TodoModule, NoteTagModule],
  controllers: [NoteController],
  providers: [NoteService],
})
export class NoteModule {}
