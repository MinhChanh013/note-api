import { Sticky } from '@app/entities/sticky.entity';
import { User } from '@app/entities/user.entity';
import { Repository } from 'typeorm';
export declare class StickyService {
    private stickyRepository;
    constructor(stickyRepository: Repository<Sticky>);
    getStickys(request: User): Promise<Sticky[] | null>;
}
