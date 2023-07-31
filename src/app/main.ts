import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app.config.service';
import { registerSwagger } from '@libs/infrastructure/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appConfigService = app.get(AppConfigService);

  const {
    port,
    host,
    appName,
    appVer,
    allowedOrigins,
    enableApiDoc,
    apiDocPrefix,
    apiPrefix,
  } = appConfigService.AppOptions;

  if (enableApiDoc) {
    registerSwagger(app, { appName, appVer, apiPrefix: `/${apiDocPrefix}` });
  }
  app.enableShutdownHooks();
  app.enableCors();
  await app.listen(port, host);
  Logger.log(`Server started on http://localhost:${port}/api/v1`, 'Server');
  if (enableApiDoc) {
    Logger.log(
      `Api doc started on http://localhost:${port}/${apiDocPrefix}`,
      'Api Doc',
    );
  }
}
bootstrap();
