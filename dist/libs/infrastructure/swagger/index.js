"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSwagger = void 0;
const swagger_1 = require("@nestjs/swagger");
const registerSwagger = (app, { appName, appVer, apiPrefix = '/api' }) => {
    const swaggerDocBuilder = new swagger_1.DocumentBuilder()
        .setTitle(appName)
        .setDescription(`${appName} API description`)
        .setVersion(appVer)
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
    }, 'JWT-auth')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerDocBuilder);
    swagger_1.SwaggerModule.setup(apiPrefix, app, document);
};
exports.registerSwagger = registerSwagger;
//# sourceMappingURL=index.js.map