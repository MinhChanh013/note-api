import { Tag } from '@app/entities/tag.entity';
import { Repository } from 'typeorm';
export declare class TagService {
    private tagRepository;
    constructor(tagRepository: Repository<Tag>);
    getTags(): Promise<Tag[] | null>;
    createTag(request: Tag): Promise<Tag | null>;
}
