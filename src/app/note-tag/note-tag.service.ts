import { NoteTag } from '@app/entities/note-tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteTagDTO } from './dto/note-tag-update-request.dto';

@Injectable()
export class NoteTagService {
  constructor(
    @InjectRepository(NoteTag)
    private noteTagRepository: Repository<NoteTag>,
  ) {}

  public async getNoteTags(): Promise<NoteTag[] | null> {
    return await this.noteTagRepository
      .createQueryBuilder('note-tag')
      .leftJoinAndSelect('note-tag.tag', 'tags')
      .leftJoinAndSelect('note-tag.note', 'notes')
      .getMany();
  }

  public async createNoteTag(request: NoteTag) {
    return await this.noteTagRepository.save(request);
  }

  public async updateNoteTag(request: NoteTagDTO[], nodeId: number) {
    for (const noteTag of request) {
      if (!noteTag.id) {
        const payloadNoteTag = {
          note: { noteId: nodeId },
          tag: { tagId: noteTag.tagId },
          createdAt: new Date().toISOString(),
        };
        await this.noteTagRepository.save(payloadNoteTag);
      } else {
        if (noteTag.isDelete) {
          await this.noteTagRepository.delete(noteTag.id);
        }
      }
    }
    return true;
  }
}
