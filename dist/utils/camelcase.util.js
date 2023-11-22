"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCaseKeys = exports.snakeCaseKeys = void 0;
const class_transformer_1 = require("class-transformer");
function snakeCaseKeys(type, data, excludeExtraneous) {
    const request = (0, class_transformer_1.plainToInstance)(type, data, {
        exposeDefaultValues: true,
        excludeExtraneousValues: excludeExtraneous ? true : false,
    });
    return (0, class_transformer_1.instanceToPlain)(request, {
        exposeDefaultValues: false,
        exposeUnsetFields: false,
    });
}
exports.snakeCaseKeys = snakeCaseKeys;
function camelCaseKeys(type, data) {
    return (0, class_transformer_1.plainToInstance)(type, data, {
        exposeDefaultValues: true,
        exposeUnsetFields: false,
    });
}
exports.camelCaseKeys = camelCaseKeys;
//# sourceMappingURL=camelcase.util.js.map