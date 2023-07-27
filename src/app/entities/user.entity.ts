import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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

  @Column({ nullable: true })
  created_at: string;
}
