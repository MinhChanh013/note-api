import { Tag } from '@app/entities/tag.entity';
import { TodoDTO } from '@app/todo/dto/todo-update-request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class NoteUpdateDTO {
  @ApiProperty({
    type: Number,
    name: 'note_id',
    example: 1,
  })
  noteId?: number;
  @ApiProperty({
    type: String,
    example: 'Công việc trong ngày',
  })
  title: string;
  @ApiProperty({
    type: String,
    example: '2023-07-28 08:00:00',
  })
  timeFrom: string;
  @ApiProperty({
    type: String,
    example: '2023-07-28 08:00:00',
  })
  timeTo: string;
  @ApiProperty({
    type: String,
    example: 'Hoàn thành các công việc và lập báo cáo.',
  })
  description: string;
  @ApiProperty({
    type: String,
    example: '#4BCE97',
  })
  cover: string;
  todos: TodoDTO[];
  tags: Tag[];

  @ApiProperty({
    type: String,
    name: 'created_at',
  })
  createdAt: string;
}
