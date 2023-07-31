import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NoteTagService } from './note-tag.service';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { NoteTag } from '@app/entities/note-tag.entity';
import { NoteTagRequest } from './dto/note-tag-request.dto';

@ApiTags('note-tag')
@Controller('note-tag')
export class NoteTagController {
  constructor(private readonly noteTagService: NoteTagService) {}

  @Get('tags')
  @HttpCode(200)
  public async getNoteTags(): Promise<NoteTagService | object> {
    const data = await this.noteTagService.getNoteTags();
    // convert camelCase to snake_case
    const noteTagsData = snakeCaseKeys(NoteTag, data as NoteTag[]);
    return noteTagsData;
  }

  @Post('create')
  @HttpCode(200)
  public async createNoteTag(@Body() request: NoteTag) {
    return await this.noteTagService.createNoteTag(request);
  }
}
