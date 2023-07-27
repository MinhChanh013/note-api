// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { cleanEnv, str, num } from 'envalid';

export type Environments = 'production' | 'development' | 'test';

export const env = cleanEnv(process.env, {
  CA_SSL_PATH: str(),
  JWT_SECRET: str(),
  JWT_EXPIRATION_TIME: str(),
});
