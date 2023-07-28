import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { Note } from './note.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'note-tag' })
export class NoteTag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Note, (note) => note.tags)
  @JoinColumn({ name: 'note' })
  note: Note;

  @ManyToOne(() => Tag, (tag) => tag.notes)
  @JoinColumn({ name: 'tag' })
  tag: Tag;

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
