import { Module } from '@nestjs/common';
import { NoteTagService } from './note-tag.service';
import { NoteTagController } from './note-tag.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NoteTag } from '@app/entities/note-tag.entity';

@Module({
  imports: [TypeOrmModule.forFeature([NoteTag])],
  providers: [NoteTagService],
  controllers: [NoteTagController],
  exports: [NoteTagService],
})
export class NoteTagModule {}
