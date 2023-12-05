import { TagService } from './tag.service';
import { Tag } from '@app/entities/tag.entity';
import { TagUpdateDTO } from './dto/tag-update-request.dto';
export declare class TagController {
    private readonly tagService;
    constructor(tagService: TagService);
    getTags(request: any): Promise<Tag[] | object>;
    createTag(request: Tag, requestUser: any): Promise<TagService | object>;
    updateTag(request: TagUpdateDTO, tagId: string): Promise<boolean>;
    removeTag(tagId: string): Promise<boolean>;
}
