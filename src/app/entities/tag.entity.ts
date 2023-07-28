import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expose } from 'class-transformer';
import { NoteTag } from './note-tag.entity';

@Entity({ name: 'tag' })
export class Tag {
  @PrimaryGeneratedColumn()
  @Expose({ name: 'tag_id' })
  tagId: number;

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

  @OneToMany(() => NoteTag, (noteTag) => noteTag.tag)
  notes: NoteTag[];

  @Expose({ name: 'created_at' })
  @Column({ nullable: true })
  createdAt: string;
}
