import { ConfigService } from '@nestjs/config';
export declare class AppConfigService {
    private readonly config;
    constructor(config: ConfigService);
    get AppOptions(): {
        port: any;
        host: any;
        appName: any;
        appVer: any;
        apiPrefix: any;
        allowedOrigins: string | string[];
        enableApiDoc: string;
        apiDocPrefix: string;
    };
}
