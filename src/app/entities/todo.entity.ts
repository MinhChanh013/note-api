import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Note } from './note.entity';

@Entity({ name: 'todo' })
export class Todo {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'todo_id' })
  todoId?: number;

  @ApiProperty({
    example: 'ff18819f-0abe-4679-9d0d-54d70b29ecd5',
  })
  @Column({ nullable: true })
  todoUuid: string;

  @ApiProperty({
    example: 'Họp hội nghị',
  })
  @Column({ nullable: true })
  label: string;

  @ApiProperty({
    example: '0',
  })
  @Column({ nullable: true })
  status: number;

  @ApiProperty({
    example: '0',
  })
  @Column({ nullable: true })
  trim: number;

  @ManyToOne(() => Note, (note) => note.todos)
  @JoinColumn({ name: 'note' })
  note: Note;

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
