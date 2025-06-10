import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Patch,
  UseGuards,
  Request,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
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
      const { user, accessToken, tokenName } = result;
      let redirectTo = '/Id/';
      if (user.peran === 'admin') {
        redirectTo = '/admin/dashboard';
      }

      return {
        accessToken,
        user,
        redirectTo,
        tokenName,
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

  @UseGuards(JwtAuthGuard)
  @Put('profile')
  async updateProfile(
    @Request() req: AuthenticatedRequest,
    @Body() dto: UpdateProfileDto,
  ) {
    try {
      const userId = req.user.id;
      const updatedUser = await this.authService.updateProfile(userId, dto);
      return updatedUser;
    } catch (error) {
      if (error instanceof UnauthorizedException) {
        throw error;
      }
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException({
        statusCode: error?.statusCode || 400,
        message:
          error?.response?.message || 'Gagal memperbarui profil pengguna.',
        error: error?.response?.error || 'Bad Request',
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Patch('change-password')
  async changePassword(
    @Request() req: AuthenticatedRequest,
    @Body() dto: ChangePasswordDto,
  ) {
    try {
      const userId = req.user.id;
      const result = await this.authService.changePassword(userId, dto);
      return result;
    } catch (error) {
      if (
        error instanceof UnauthorizedException ||
        error instanceof BadRequestException
      ) {
        throw error;
      }
      throw new BadRequestException({
        statusCode: 500,
        message: 'Gagal mengubah kata sandi. Silakan coba lagi.',
        error: 'Internal Server Error',
      });
    }
  }
}
