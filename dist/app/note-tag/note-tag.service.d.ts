import { NoteTag } from '@app/entities/note-tag.entity';
import { Repository } from 'typeorm';
export declare class NoteTagService {
    private noteTagRepository;
    constructor(noteTagRepository: Repository<NoteTag>);
    getNoteTags(): Promise<NoteTag[] | null>;
    createNoteTag(request: NoteTag): Promise<NoteTag>;
}
