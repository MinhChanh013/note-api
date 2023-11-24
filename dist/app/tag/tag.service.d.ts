import { Tag } from '@app/entities/tag.entity';
import { Repository } from 'typeorm';
import { TagUpdateDTO } from './dto/tag-update-request.dto';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getTags(): Promise<Tag[] | null>;
    createTag(request: Tag): Promise<Tag | null>;
    updateTag(request: TagUpdateDTO, tagId: string): Promise<boolean>;
    removeTag(tagId: string): Promise<boolean>;
}
