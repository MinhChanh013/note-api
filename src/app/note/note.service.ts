import { Note } from '@app/entities/note.entity';
import { NoteTagService } from '@app/note-tag/note-tag.service';
import { TodoService } from '@app/todo/todo.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { NoteTag } from '@app/entities/note-tag.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
    private readonly todoService: TodoService,
    private readonly noteTagService: NoteTagService,
  ) {}

  public async getNotes() {
    const data = await this.noteRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.todos', 'todo')
      .leftJoinAndSelect('note.tags', 'note-tag')
      .leftJoinAndSelect('note-tag.tag', 'tag')
      .orderBy('note.createdAt', 'DESC')
      .getMany();

    const notesData = snakeCaseKeys(Note, data as Note[]);

    const newNoteData = notesData.map((note: Note) => ({
      ...note,
      tags: note.tags.map((noteTag: NoteTag) => noteTag.tag),
    }));
    return newNoteData;
  }

  public async getNote(noteId: string) {
    const data = await this.noteRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.todos', 'todo')
      .leftJoinAndSelect('note.tags', 'note-tag')
      .leftJoinAndSelect('note-tag.tag', 'tag')
      .orderBy('note.createdAt', 'DESC')
      .where('note.noteId = :noteId', {
        noteId,
      })
      .getMany();

    const notesData = snakeCaseKeys(Note, data as unknown as Note);

    const newNoteData = notesData.map((note: Note) => ({
      ...note,
      tags: note.tags.map((noteTag: NoteTag) => noteTag.tag),
    }))[0];
    return newNoteData;
  }

  public async createNote(request: NoteCreateRequest): Promise<Note | null> {
    request.createdAt = new Date().toISOString();
    // save note
    const newNote = await this.noteRepository.save(request);
    if (newNote) {
      for (const todo of request.todos) {
        // save todos
        const payloadTodo = { ...todo, note: newNote };
        await this.todoService.createTodos(payloadTodo);
      }

      // save note-tag
      for (const tag of request.tags) {
        const payloadNoteTag = {
          note: request as unknown as Note,
          tag: tag,
          createdAt: new Date().toISOString(),
        };
        await this.noteTagService.createNoteTag(payloadNoteTag);
      }
      return { ...newNote, todos: request.todos };
    }
  }
}
