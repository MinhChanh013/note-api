import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NoteService } from './note.service';
import { Note } from '@app/entities/note.entity';
import { snakeCaseKeys } from 'src/utils/camelcase.util';

@ApiTags('note')
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get('notes')
  @HttpCode(200)
  public async getNotes(): Promise<Note[] | object> {
    const data = await this.noteService.getNotes();
    // convert camelCase to snake_case
    const notesData = snakeCaseKeys(Note, data as Note[]);
    return notesData;
  }
}
