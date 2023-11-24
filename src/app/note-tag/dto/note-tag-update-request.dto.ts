import { ApiProperty } from '@nestjs/swagger';

export class NoteTagDTO {
  @ApiProperty({
    type: Number,
    name: 'id',
  })
  id?: number;

  @ApiProperty({
    type: Number,
    name: 'note_id',
  })
  noteId?: number;

  @ApiProperty({
    type: Number,
    name: 'tag_id',
  })
  tagId?: number;

  @ApiProperty({
    type: Boolean,
    name: 'is_delete',
  })
  isDelete?: boolean;

  @ApiProperty({
    type: String,
    name: 'created_at',
  })
  createdAt: string;
}
