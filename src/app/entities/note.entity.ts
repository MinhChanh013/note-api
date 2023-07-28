import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { Todo } from './todo.entity';
import { NoteTag } from './note-tag.entity';

@Entity({ name: 'note' })
export class Note {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'note_id' })
  noteId: number;

  @ApiProperty({
    example: 'Công việc trong ngày',
  })
  @Column({ nullable: true })
  title: string;

  @ApiProperty({
    example: '2023-07-28 08:00:00',
  })
  @Expose({ name: 'time_from' })
  @Column({ nullable: true })
  timeFrom: string;

  @ApiProperty({
    example: '2023-07-28 17:30:00',
  })
  @Expose({ name: 'time_to' })
  @Column({ nullable: true })
  timeTo: string;

  @ApiProperty({
    example: 'Hoàn thành các công việc và lập báo cáo.',
  })
  @Column({ nullable: true })
  description: string;

  @ApiProperty({
    example: '#4BCE97',
  })
  @Column({ nullable: true })
  cover: string;

  @OneToMany(() => Todo, (todo) => todo.note)
  todos: Todo[];

  @OneToMany(() => NoteTag, (noteTag) => noteTag.note)
  tags: NoteTag[];

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
