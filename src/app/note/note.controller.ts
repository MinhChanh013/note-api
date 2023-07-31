import { Controller, Get, HttpCode, Post, Body } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { NoteService } from './note.service';
import { Note } from '@app/entities/note.entity';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { NoteCreateRequest } from './dto/note-create-request.dto';

@ApiTags('note')
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('notes')
  @HttpCode(200)
  public async getNotes() {
    const data = await this.noteService.getNotes();
    return data;
  }

  @Post('create')
  @ApiOkResponse({
    description: 'Create new note',
  })
  async createNote(
    @Body() request: NoteCreateRequest,
  ): Promise<NoteCreateRequest | object> {
    const data = await this.noteService.createNote(request);
    // convert camelCase to snake_case
    const noteData = snakeCaseKeys(
      NoteCreateRequest,
      data as unknown as NoteCreateRequest,
    );
    return noteData;
  }
}
