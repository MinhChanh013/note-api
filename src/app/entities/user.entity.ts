import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from './note.entity';
import { Tag } from './tag.entity';
import { Sticky } from './sticky.entity';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({
    example: 'Nguyễn Minh Chánh',
  })
  @Column({ nullable: true })
  full_name?: string;

  @ApiProperty({
    example: 'nguyenminhchanh1910@gmail.com',
  })
  @Column({ nullable: true })
  email: string;

  @ApiProperty({
    example: 'Chanh013',
  })
  @Column({ nullable: true })
  password: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dvdejvb2x/image/upload/v1701701648/hjxuecjtg7qlkwrf0y7j.png',
  })
  @Column({ nullable: true })
  avatar: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dvdejvb2x/image/upload/v1701701636/cauqv8ikqm9owcrjc7ck.jpg',
  })
  @Column({ nullable: true })
  background: string;

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags: Tag[];

  @OneToMany(() => Sticky, (sticky) => sticky.user)
  stickys: Sticky[];

  @Column({ nullable: true })
  created_at: string;
}
