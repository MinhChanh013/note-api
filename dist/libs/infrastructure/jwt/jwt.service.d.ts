import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService as JwtAuthService } from '@nestjs/jwt';
export declare class JwtService implements CanActivate {
    private jwtService;
    constructor(jwtService: JwtAuthService);
    canActivate(context: ExecutionContext): Promise<boolean>;
    private extractTokenFromHeader;
}
