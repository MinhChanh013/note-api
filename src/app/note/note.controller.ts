import {
  Controller,
  Get,
  HttpCode,
  Post,
  Put,
  Body,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiOkResponse, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { NoteService } from './note.service';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { NoteCreateRequest } from './dto/note-create-request.dto';
import { NoteUpdateDTO } from './dto/note-update-request.dto';
import { JwtService } from '@libs/infrastructure/jwt/jwt.service';

@ApiTags('note')
@Controller('note')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Get('notes')
  @HttpCode(200)
  public async getNotes(@Request() request: any) {
    const data = await this.noteService.getNotes(request.user);
    return data;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Get('note/:noteId')
  @HttpCode(200)
  public async getNote(@Param('noteId') noteId: string) {
    const data = await this.noteService.getNote(noteId);
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

  @Post('delete')
  @ApiOkResponse({
    description: 'Delete note',
  })
  async deleteNote(
    @Body() deleteNoteDto: { idNote: string },
  ): Promise<NoteCreateRequest | object> {
    const data = await this.noteService.deleteNote(deleteNoteDto.idNote);
    return data;
  }

  @Put('update/:noteId')
  @ApiOkResponse({
    description: 'Update note',
  })
  async updateNote(
    @Body() request: NoteUpdateDTO,
    @Param('noteId') noteId: string,
  ): Promise<boolean> {
    return await this.noteService.updateNote(noteId, request);
  }
}
