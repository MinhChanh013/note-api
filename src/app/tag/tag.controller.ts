import {
  Controller,
  Get,
  HttpCode,
  Post,
  Body,
  Put,
  Param,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';
import { Tag } from '@app/entities/tag.entity';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { TagUpdateDTO } from './dto/tag-update-request.dto';

@ApiTags('tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('tags')
  @HttpCode(200)
  public async getTags(): Promise<Tag[] | object> {
    const data = await this.tagService.getTags();
    // convert camelCase to snake_case
    const tagsData = snakeCaseKeys(Tag, data as Tag[]);
    return tagsData;
  }

  @Post('create')
  @HttpCode(200)
  public async createTag(@Body() request: Tag): Promise<TagService | object> {
    const data = await this.tagService.createTag(request);
    // convert camelCase to snake_case
    const tagsData = snakeCaseKeys(Tag, data as Tag);
    return tagsData;
  }

  @Put('update/:tagId')
  public async updateTag(
    @Body() request: TagUpdateDTO,
    @Param('tagId') tagId: string,
  ): Promise<boolean> {
    return await this.tagService.updateTag(request, tagId);
  }

  @Post('remove/:tagId')
  public async removeTag(@Param('tagId') tagId: string): Promise<boolean> {
    return await this.tagService.removeTag(tagId);
  }
}
