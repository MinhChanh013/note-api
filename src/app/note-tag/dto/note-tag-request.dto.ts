import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';

@Entity({ name: 'note-tag' })
export class NoteTagRequest {
  @PrimaryGeneratedColumn()
  id?: number;

  note: NoteRquestNoteTag;

  tag: TagRquestNoteTag;

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}

export class NoteRquestNoteTag {
  idNote: number;
}

export class TagRquestNoteTag {
  idTag: number;
}
