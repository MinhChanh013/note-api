import { NoteTag } from '@app/entities/note-tag.entity';
import { Repository } from 'typeorm';
import { NoteTagDTO } from './dto/note-tag-update-request.dto';
export declare class NoteTagService {
    private noteTagRepository;
    constructor(noteTagRepository: Repository<NoteTag>);
    getNoteTags(): Promise<NoteTag[] | null>;
    createNoteTag(request: NoteTag): Promise<NoteTag>;
    updateNoteTag(request: NoteTagDTO[], nodeId: number): Promise<boolean>;
}
