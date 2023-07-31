import { Tag } from '@app/entities/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  public async getTags(): Promise<Tag[] | null> {
    return await this.tagRepository.find();
  }

  public async createTag(request: Tag): Promise<Tag | null> {
    const payload = { ...request, createdAt: new Date().toISOString() };
    return await this.tagRepository.save(payload);
  }
}
