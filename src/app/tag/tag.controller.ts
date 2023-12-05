import {
  Controller,
  Get,
  HttpCode,
  Post,
  Body,
  Put,
  UseGuards,
  Param,
  Request,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { TagService } from './tag.service';
import { Tag } from '@app/entities/tag.entity';
import { snakeCaseKeys } from 'src/utils/camelcase.util';
import { TagUpdateDTO } from './dto/tag-update-request.dto';
import { JwtService } from '@libs/infrastructure/jwt/jwt.service';

@ApiTags('tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Get('tags')
  @HttpCode(200)
  public async getTags(@Request() request: any): Promise<Tag[] | object> {
    const data = await this.tagService.getTags(request.user);
    // convert camelCase to snake_case
    const tagsData = snakeCaseKeys(Tag, data as Tag[]);
    return tagsData;
  }

  @UseGuards(JwtService)
  @ApiSecurity('JWT-auth')
  @Post('create')
  @HttpCode(200)
  public async createTag(
    @Body() request: Tag,
    @Request() requestUser: any,
  ): Promise<TagService | object> {
    const data = await this.tagService.createTag(request, requestUser.user);
    // convert camelCase to snake_case
    const tagsData = snakeCaseKeys(Tag, data as Tag);
    return tagsData;
  }

  @Put('update/:tagId')
  public async updateTag(
    @Body() request: TagUpdateDTO,
    @Param('tagId') tagId: string,
  ): Promise<boolean> {
    return await this.tagService.updateTag(request, tagId);
  }

  @Post('remove/:tagId')
  public async removeTag(@Param('tagId') tagId: string): Promise<boolean> {
    return await this.tagService.removeTag(tagId);
  }
}
