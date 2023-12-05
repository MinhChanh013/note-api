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

@Entity({ name: 'tag' })
export class Tag {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'tag_id' })
  tagId?: number;

  @ApiProperty({
    example: 'Meeting',
  })
  @Column({ nullable: true })
  label: string;

  @ApiProperty({
    example: '#4BCE97',
  })
  @Column({ nullable: true })
  cover: string;

  @Column({ nullable: true })
  color: string;

  @ManyToOne(() => User, (user) => user.notes)
  @JoinColumn({ name: 'user' })
  user: User;

  @OneToMany(() => NoteTag, (noteTag) => noteTag.tag)
  notes: NoteTag[];

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
