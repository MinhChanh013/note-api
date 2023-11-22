import { NoteService } from './note.service';
import { NoteCreateRequest } from './dto/note-create-request.dto';
export declare class NoteController {
    private readonly noteService;
    constructor(noteService: NoteService);
    getNotes(): Promise<any>;
    getNote(noteId: string): Promise<any>;
    createNote(request: NoteCreateRequest): Promise<NoteCreateRequest | object>;
    deleteNote(deleteNoteDto: {
        idNote: string;
    }): Promise<NoteCreateRequest | object>;
}
