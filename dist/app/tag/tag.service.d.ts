import { Tag } from '@app/entities/tag.entity';
import { Repository } from 'typeorm';
import { TagUpdateDTO } from './dto/tag-update-request.dto';
import { User } from '@app/entities/user.entity';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getTags(request: User): Promise<Tag[] | null>;
    createTag(request: Tag, requestUser: User): Promise<Tag | null>;
    updateTag(request: TagUpdateDTO, tagId: string): Promise<boolean>;
    removeTag(tagId: string): Promise<boolean>;
}
