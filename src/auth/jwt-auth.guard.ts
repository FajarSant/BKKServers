// src/auth/jwt-auth.guard.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user, info) {
    if (err || !user) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Token tidak valid atau telah kadaluarsa.',
        error: 'Unauthorized',
      });
    }
    return user;
  }
}
