import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const registerSwagger = (
  app,
  { appName, appVer, apiPrefix = '/api' },
) => {
  const swaggerDocBuilder = new DocumentBuilder()
    .setTitle(appName)
    .setDescription(`${appName} API description`)
    .setVersion(appVer)
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(app, swaggerDocBuilder);
  SwaggerModule.setup(apiPrefix, app, document);
};
