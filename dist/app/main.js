"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_config_service_1 = require("./config/app.config.service");
const swagger_1 = require("../libs/infrastructure/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const appConfigService = app.get(app_config_service_1.AppConfigService);
    const { port, host, appName, appVer, allowedOrigins, enableApiDoc, apiDocPrefix, apiPrefix, } = appConfigService.AppOptions;
    if (enableApiDoc) {
        (0, swagger_1.registerSwagger)(app, { appName, appVer, apiPrefix: `/${apiDocPrefix}` });
    }
    app.enableShutdownHooks();
    app.enableCors();
    await app.listen(port, host);
    common_1.Logger.log(`Server started on http://localhost:${port}/api/v1`, 'Server');
    if (enableApiDoc) {
        common_1.Logger.log(`Api doc started on http://localhost:${port}/${apiDocPrefix}`, 'Api Doc');
    }
}
bootstrap();
//# sourceMappingURL=main.js.map