import { ApiProperty } from '@nestjs/swagger';

export class TagUpdateDTO {
  @ApiProperty({
    type: Number,
    example: 1,
    name: 'tag_Id',
  })
  tagId?: number;
  @ApiProperty({
    type: String,
    example: 'Meeting',
  })
  label: string;
  @ApiProperty({
    type: String,
    example: '#4BCE97',
  })
  cover: string;
  @ApiProperty({
    type: String,
    example: '#4BCE97',
  })
  color: string;

  @ApiProperty({
    type: String,
    name: 'created_at',
  })
  createdAt: string;
}
