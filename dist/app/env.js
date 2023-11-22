"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
require('dotenv').config();
const envalid_1 = require("envalid");
exports.env = (0, envalid_1.cleanEnv)(process.env, {
    CA_SSL_PATH: (0, envalid_1.str)(),
    JWT_SECRET: (0, envalid_1.str)(),
    JWT_EXPIRATION_TIME: (0, envalid_1.str)(),
});
//# sourceMappingURL=env.js.map