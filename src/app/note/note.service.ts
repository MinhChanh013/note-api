import { Note } from '@app/entities/note.entity';
import { NoteTagService } from '@app/note-tag/note-tag.service';
import { TodoService } from '@app/todo/todo.service';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { NoteTag } from '@app/entities/note-tag.entity';
import { NoteUpdateDTO } from './dto/note-update-request.dto';
import { User } from '@app/entities/user.entity';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(Note)
    private noteRepository: Repository<Note>,
    private readonly todoService: TodoService,
    private readonly noteTagService: NoteTagService,
  ) {}

  public async getNotes(request: User) {
    const data = await this.noteRepository
      .createQueryBuilder('note')
      .leftJoinAndSelect('note.todos', 'todo')
      .leftJoinAndSelect('note.tags', 'note-tag')
      .leftJoinAndSelect('note-tag.tag', 'tag')
      .leftJoinAndSelect('note.user', 'user')
      .orderBy('note.createdAt', 'DESC')
      .where('user.id = :userId', {
        userId: request.id,
      })
      .getMany();

    const notesData = snakeCaseKeys(Note, data as Note[]);

    const newNoteData = notesData.map((note: Note) => ({
      ...note,
      tags: note.tags.map((noteTag: NoteTag) => {
        return { id: noteTag.id, ...noteTag.tag };
      }),
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
      tags: note.tags.map((noteTag: NoteTag) => {
        return { id: noteTag.id, ...noteTag.tag };
      }),
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

  public async deleteNote(idNote: string): Promise<NoteCreateRequest | object> {
    const data = await this.noteRepository.delete(idNote);
    return data;
  }

  public async updateNote(
    noteId: string,
    request: NoteUpdateDTO,
  ): Promise<boolean> {
    const nodeIdNumber = Number(noteId);
    await this.noteRepository.update(
      {
        noteId: nodeIdNumber,
      },
      {
        title: request.title,
        timeFrom: request.timeFrom,
        timeTo: request.timeTo,
        description: request.description,
        cover: request.cover,
      },
    );
    await this.todoService.updateTodos(request.todos, nodeIdNumber);
    await this.noteTagService.updateNoteTag(request.tags, nodeIdNumber);
    return true;
  }
}
