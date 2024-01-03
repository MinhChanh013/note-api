import { Controller, Get, HttpCode, Request, UseGuards } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { StickyService } from './sticky.service';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { Sticky } from '@app/entities/sticky.entity';
import { JwtService } from '@libs/infrastructure/jwt/jwt.service';

@ApiTags('sticky')
@Controller('sticky')
export class StickyController {
  constructor(private readonly stickyService: StickyService) {}

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Get('stickys')
  @HttpCode(200)
  public async getStickys(
    @Request() request: any,
  ): Promise<StickyService | object> {
    const data = await this.stickyService.getStickys(request.user);
    // convert camelCase to snake_case
    const noteTagsData = snakeCaseKeys(Sticky, data as Sticky[]);
    return noteTagsData;
  }
}
