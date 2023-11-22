import { TagService } from './tag.service';
import { Tag } from '@app/entities/tag.entity';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getTags(): Promise<Tag[] | object>;
    createTag(request: Tag): Promise<TagService | object>;
}
