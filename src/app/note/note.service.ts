import { Note } from '@app/entities/note.entity';
import { Todo } from '@app/entities/todo.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
  ) {}

  public async getNotes(): Promise<Note[] | null> {
    return await this.noteRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.tags', 'tag')
      .leftJoinAndSelect('note.todos', 'todo')
      .getMany();
  }
}
