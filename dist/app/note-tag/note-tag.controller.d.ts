import { NoteTagService } from './note-tag.service';
import { NoteTag } from '@app/entities/note-tag.entity';
export declare class NoteTagController {
    private readonly noteTagService;
    constructor(noteTagService: NoteTagService);
    getNoteTags(): Promise<NoteTagService | object>;
    createNoteTag(request: NoteTag): Promise<NoteTag>;
}
