export type Environments = 'production' | 'development' | 'test';
export declare const env: Readonly<{
    CA_SSL_PATH: string;
    JWT_SECRET: string;
    JWT_EXPIRATION_TIME: string;
} & import("envalid").CleanedEnvAccessors>;
