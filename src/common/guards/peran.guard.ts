import {
    Injectable,
    CanActivate,
    ExecutionContext,
    ForbiddenException,
  } from '@nestjs/common';
  import { Reflector } from '@nestjs/core';
  import { PERAN_KEY } from '../decorator/peran.decorator';
  
  @Injectable()
  export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}
  
    canActivate(context: ExecutionContext): boolean {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(PERAN_KEY, [
        context.getHandler(),
        context.getClass(),
      ]);
      if (!requiredRoles) {
        return true;
      }
  
      const { user } = context.switchToHttp().getRequest();
      if (!requiredRoles.includes(user.peran)) {
        throw new ForbiddenException('Akses ditolak: hanya admin yang diizinkan');
      }
  
      return true;
    }
  }
  