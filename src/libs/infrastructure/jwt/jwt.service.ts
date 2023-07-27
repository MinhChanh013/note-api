import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  HttpException,
} from '@nestjs/common';
import { JwtService as JwtAuthService } from '@nestjs/jwt';

@Injectable()
export class JwtService implements CanActivate {
  constructor(private jwtService: JwtAuthService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) throw new UnauthorizedException();

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      request['user'] = payload;
    } catch (err) {
      throw new HttpException('Token is invalid', 401);
    }

    return true;
  }
  private extractTokenFromHeader(request: any): string | undefined {
    if (!request.headers.authorization) throw new UnauthorizedException();
    const [type, token] = request.headers.authorization.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
