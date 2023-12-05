import { Tag } from '@app/entities/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TagUpdateDTO } from './dto/tag-update-request.dto';
import { User } from '@app/entities/user.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  public async getTags(request: User): Promise<Tag[] | null> {
    return await this.tagRepository.find({
      where: { user: { id: request.id } },
    });
  }

  public async createTag(request: Tag, requestUser: User): Promise<Tag | null> {
    const payload = {
      ...request,
      createdAt: new Date().toISOString(),
      user: requestUser,
    };
    return await this.tagRepository.save(payload);
  }

  public async updateTag(
    request: TagUpdateDTO,
    tagId: string,
  ): Promise<boolean> {
    const tagIdNumber = parseInt(tagId);
    await this.tagRepository.update(
      {
        tagId: tagIdNumber,
      },
      {
        label: request.label,
        cover: request.cover,
        color: request.color,
      },
    );
    return true;
  }

  public async removeTag(tagId: string): Promise<boolean> {
    await this.tagRepository.delete({ tagId: parseInt(tagId) });
    return true;
  }
}
