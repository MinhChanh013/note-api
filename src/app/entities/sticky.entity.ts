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
import { NoteTag } from './note-tag.entity';
import { User } from './user.entity';

@Entity({ name: 'sticky' })
export class Sticky {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    example: 'Meeting',
  })
  @Column({ nullable: true })
  content: string;

  @ApiProperty({
    example: '569bd40f-0aac-4648-955d-afdd614924fb',
  })
  @Column({ nullable: true })
  uuid: string;

  @ApiProperty({
    example: '#4BCE97',
  })
  @Column({ nullable: true })
  cover: string;

  @ApiProperty({
    example: 'left-0 top-0',
  })
  @Column({ nullable: true })
  position: string;

  @ApiProperty({
    example: false,
  })
  @Column({ nullable: true })
  minimize: boolean;

  @ApiProperty({
    example: 0,
  })
  @Column({ nullable: true })
  index: number;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user' })
  user: User;

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
