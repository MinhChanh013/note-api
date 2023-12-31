import { Note } from '@app/entities/note.entity';
import { NoteTagService } from '@app/note-tag/note-tag.service';
import { TodoService } from '@app/todo/todo.service';
import { Repository } from 'typeorm';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { NoteUpdateDTO } from './dto/note-update-request.dto';
import { User } from '@app/entities/user.entity';
export declare class NoteService {
    private noteRepository;
    private readonly todoService;
    private readonly noteTagService;
    constructor(noteRepository: Repository<Note>, todoService: TodoService, noteTagService: NoteTagService);
    getNotes(request: User): Promise<any>;
    getNote(noteId: string): Promise<any>;
    createNote(request: NoteCreateRequest, requestUser: User): Promise<Note | null>;
    deleteNote(idNote: string): Promise<NoteCreateRequest | object>;
    updateNote(noteId: string, request: NoteUpdateDTO): Promise<boolean>;
}
