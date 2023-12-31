"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeMailerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const nodemailer = require("nodemailer");
let NodeMailerService = class NodeMailerService {
    constructor(config) {
        this.config = config;
    }
    async sendEmail(request) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: this.config.get('USER_MAIL'),
                pass: this.config.get('PASS_MAIL'),
            },
        });
        return await transporter.sendMail({
            from: this.config.get('USER_MAIL'),
            to: request.email,
            subject: request.subject,
            html: request.body,
        });
    }
};
NodeMailerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], NodeMailerService);
exports.NodeMailerService = NodeMailerService;
//# sourceMappingURL=nodemailer.service.js.map