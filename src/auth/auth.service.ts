import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { Pengguna } from '@prisma/client'; 

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async login(nisn: string, password: string) {
    const user = await this.findUserByNisn(nisn);

    if (!user) {
      throw new NotFoundException('Pengguna dengan NISN ini tidak ditemukan.');
    }

    const isPasswordValid = await bcrypt.compare(password, user.kataSandi);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password yang Anda masukkan salah.');
    }

    const payload = { id: user.id, nisn: user.nisn };
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const expiration = this.configService.get<string>('JWT_EXPIRATION');

    const token = this.jwtService.sign(payload, {
      secret: jwtSecret,
      expiresIn: expiration,
    });

    return {
      message: 'Login berhasil!',
      access_token: token,
      user: {
        id: user.id,
        nama: user.nama,
        email: user.email,
        peran: user.peran,
        nisn: user.nisn,
        alamat: user.alamat,
        telepon: user.telepon,
        tanggalLahir: user.tanggalLahir,
        jenisKelamin: user.jenisKelamin,
        dibuatPada: user.dibuatPada,
      },
    };
  }

  private async findUserByNisn(nisn: string): Promise<Pengguna | null> {
    return this.prisma.pengguna.findUnique({
      where: { nisn },
    });
  }

  async getProfile(userId: number): Promise<{ message: string, data: Pengguna }> {
    const user = await this.prisma.pengguna.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('Profil pengguna tidak ditemukan.');
    }

    return {
      message: 'Profil pengguna berhasil diambil.',
      data: user,
    };
  }
}
