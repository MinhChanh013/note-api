import { NoteTag } from '@app/entities/note-tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NoteTagRequest } from './dto/note-tag-request.dto';

@Injectable()
export class NoteTagService {
  constructor(
    @InjectRepository(NoteTag)
    private noteTagRepository: Repository<NoteTag>,
  ) {}

  public async getNoteTags(): Promise<NoteTag[] | null> {
    return this.noteTagRepository
      .createQueryBuilder('note-tag')
      .leftJoinAndSelect('note-tag.tag', 'tags')
      .leftJoinAndSelect('note-tag.note', 'notes')
      .getMany();
  }

  public async createNoteTag(request: NoteTag) {
    return this.noteTagRepository.save(request);
  }
}
