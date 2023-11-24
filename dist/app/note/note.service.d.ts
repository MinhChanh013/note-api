import { Note } from '@app/entities/note.entity';
import { NoteTagService } from '@app/note-tag/note-tag.service';
import { TodoService } from '@app/todo/todo.service';
import { Repository } from 'typeorm';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { NoteUpdateDTO } from './dto/note-update-request.dto';
export declare class NoteService {
    private noteRepository;
    private readonly todoService;
    private readonly noteTagService;
    constructor(noteRepository: Repository<Note>, todoService: TodoService, noteTagService: NoteTagService);
    getNotes(): Promise<any>;
    getNote(noteId: string): Promise<any>;
    createNote(request: NoteCreateRequest): Promise<Note | null>;
    deleteNote(idNote: string): Promise<NoteCreateRequest | object>;
    updateNote(noteId: string, request: NoteUpdateDTO): Promise<boolean>;
}
