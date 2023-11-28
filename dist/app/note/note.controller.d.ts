import { NoteService } from './note.service';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { NoteUpdateDTO } from './dto/note-update-request.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    getNotes(request: any): Promise<any>;
    getNote(noteId: string): Promise<any>;
    createNote(request: NoteCreateRequest): Promise<NoteCreateRequest | object>;
    deleteNote(deleteNoteDto: {
        idNote: string;
    }): Promise<NoteCreateRequest | object>;
    updateNote(request: NoteUpdateDTO, noteId: string): Promise<boolean>;
}
