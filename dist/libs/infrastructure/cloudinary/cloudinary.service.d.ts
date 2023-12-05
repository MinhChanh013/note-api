import { ConfigService } from '@nestjs/config';
export declare class CloudinaryService {
    private readonly config;
    constructor(config: ConfigService);
    uploadImage(request: {
        url: string;
    }): Promise<string>;
}
