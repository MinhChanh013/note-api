import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Note } from './note.entity';

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

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[];

  @Column({ nullable: true })
  created_at: string;
}
