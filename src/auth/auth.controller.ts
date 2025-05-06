// src/auth/auth.controller.ts
import {
  Controller,
  Post,
  Body,
  Get,
  UseGuards,
  Request,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { Request as ExpressRequest } from 'express';

interface AuthenticatedRequest extends ExpressRequest {
  user: {
    id: number;
    email: string;
    peran: 'siswa' | 'alumni' | 'admin';
  };
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prisma: PrismaService,
  ) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    try {
      const result = await this.authService.login(dto);
      const { user, accessToken } = result;

      let redirectTo = '/Id/home';
      if (user.peran === 'admin') {
        redirectTo = '/admin/dashboard';
      }

      return {
        accessToken,
        user,
        redirectTo,
      };
    } catch (error) {
      throw new UnauthorizedException({
        statusCode: error?.statusCode || 500,
        message: error?.response?.message || 'Terjadi kesalahan pada server.',
        error: error?.response?.error || 'Internal Server Error',
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req: AuthenticatedRequest) {
    const userId = req.user.id;
    const user = await this.prisma.pengguna.findUnique({
      where: { id: userId },
      select: {
        id: true,
        nama: true,
        email: true,
        peran: true,
        nisn: true,
        alamat: true,
        telepon: true,
        tanggalLahir: true,
        jenisKelamin: true,
        dibuatPada: true,
      },
    });

    if (!user) {
      throw new UnauthorizedException({
        statusCode: 404,
        message: 'Pengguna tidak ditemukan.',
        error: 'Not Found',
      });
    }

    return user;
  }
}
