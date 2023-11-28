import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Todo } from './todo.entity';
import { NoteTag } from './note-tag.entity';
import { User } from './user.entity';

@Entity({ name: 'note' })
export class Note {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'note_id' })
  noteId?: number;

  @ApiProperty({
    example: 'Công việc trong ngày',
  })
  @Column({ nullable: true })
  title: string;

  @ApiProperty({
    example: '2023-07-28 08:30:00+07:00',
  })
  @Expose({ name: 'time_from' })
  @Column({ nullable: true })
  timeFrom: string;

  @ApiProperty({
    example: '2023-07-28 17:30:00+07:00',
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

  @ApiProperty({
    example: [
      {
        label: 'Họp hội nghị',
        status: 0,
        trim: 0,
      },
    ],
  })
  @OneToMany(() => Todo, (todo) => todo.note)
  todos: Todo[];

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user' })
  user: User;

  @ApiProperty({
    example: [
      {
        label: 'Meeting',
        cover: '#4BCE97',
      },
    ],
  })
  @OneToMany(() => NoteTag, (noteTag) => noteTag.note)
  tags: NoteTag[];

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
