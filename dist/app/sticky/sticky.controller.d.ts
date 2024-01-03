import { StickyService } from './sticky.service';
export declare class StickyController {
    private readonly stickyService;
    constructor(stickyService: StickyService);
    getStickys(request: any): Promise<StickyService | object>;
}
