import { ApiProperty } from '@nestjs/swagger';

export class TodoDTO {
  @ApiProperty({
    type: Number,
    name: 'todo_id',
  })
  todoId?: number;

  @ApiProperty({
    type: Number,
    name: 'note_id',
  })
  noteId?: number;

  @ApiProperty({
    example: 'ff18819f-0abe-4679-9d0d-54d70b29ecd5',
  })
  todoUuid: string;

  @ApiProperty({
    example: 'Họp hội nghị',
  })
  label: string;

  @ApiProperty({
    example: '0',
  })
  status: number;

  @ApiProperty({
    example: '0',
  })
  trim: number;

  @ApiProperty({
    example: '0',
  })
  @ApiProperty({
    type: Boolean,
    name: 'is_delete',
  })
  isDelete: boolean;

  @ApiProperty({
    type: String,
    name: 'created_at',
  })
  createdAt: string;
}
