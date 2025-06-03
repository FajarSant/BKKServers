// src/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { Pengguna } from '../generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDto) {
    const pengguna = await this.prisma.pengguna.findUnique({
      where: { nisn: dto.nisn },
    });

    if (!pengguna) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'NISN tidak ditemukan. Pastikan NISN yang Anda masukkan benar.',
        error: 'Unauthorized',
      });
    }

    const isPasswordValid = await bcrypt.compare(dto.katasandi, pengguna.katasandi);
    if (!isPasswordValid) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Kata sandi yang Anda masukkan salah.',
        error: 'Unauthorized',
      });
    }

    return this.generateToken(pengguna);
  }

  private generateToken(pengguna: Pengguna) {
    const payload = {
      sub: pengguna.id,
      email: pengguna.email,
      peran: pengguna.peran,
    };

    const accessToken = this.jwtService.sign(payload);

    return {
      accessToken,
      user: {
        id: pengguna.id,
        email: pengguna.email,
        peran: pengguna.peran,
      },
    };
  }
}
