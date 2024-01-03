import { Sticky } from '@app/entities/sticky.entity';
import { User } from '@app/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StickyService {
  constructor(
    @InjectRepository(Sticky)
    private stickyRepository: Repository<Sticky>,
  ) {}

  public async getStickys(request: User): Promise<Sticky[] | null> {
    return await this.stickyRepository
      .createQueryBuilder('sticky')
      .leftJoinAndSelect('sticky.user', 'user')
      .orderBy('sticky.createdAt', 'DESC')
      .where('user.id = :userId', {
        userId: request.id,
      })
      .getMany();
  }
}
