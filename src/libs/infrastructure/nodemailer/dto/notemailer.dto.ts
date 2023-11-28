import { ApiProperty } from '@nestjs/swagger';

export class NoteMailDTO {
  @ApiProperty({
    example: 'minhchanh1910@gmail.com',
  })
  email: string;
  @ApiProperty({
    example: 'Confirm OTP code for forgot password account',
  })
  subject: string;
  @ApiProperty({
    example: '<p>Hello wordls</p>',
  })
  body: string;
}
