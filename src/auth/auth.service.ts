import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { Pengguna } from '@prisma/client';

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
        message:
          'NISN tidak ditemukan. Pastikan NISN yang Anda masukkan benar.',
        error: 'Unauthorized',
      });
    }

    const isPasswordValid = await bcrypt.compare(
      dto.katasandi,
      pengguna.katasandi,
    );
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

    const tokenName = `${pengguna.peran}_token`;

    return {
      accessToken,
      user: {
        id: pengguna.id,
        email: pengguna.email,
        peran: pengguna.peran,
      },
      tokenName,
    };
  }

  async updateProfile(userId: number, dto: UpdateProfileDto) {
    const user = await this.prisma.pengguna.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException({
        statusCode: 404,
        message: 'Pengguna tidak ditemukan.',
        error: 'Not Found',
      });
    }
    if (dto.katasandi) {
      dto.katasandi = await bcrypt.hash(dto.katasandi, 10);
    }

    const dataToUpdate = Object.fromEntries(
      Object.entries(dto).filter(([, value]) => value !== undefined),
    );

    return this.prisma.pengguna.update({
      where: { id: userId },
      data: dataToUpdate,
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
  }

  async changePassword(
    userId: number,
    dto: ChangePasswordDto,
  ): Promise<{ message: string }> {
    const user = await this.prisma.pengguna.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new UnauthorizedException('Pengguna tidak ditemukan.');
    }
    const isOldPasswordValid = await bcrypt.compare(
      dto.katasandilama,
      user.katasandi,
    );
    if (!isOldPasswordValid) {
      throw new BadRequestException('Kata sandi lama tidak cocok.');
    }
    const hashedPassword = await bcrypt.hash(dto.katasandibaru, 10);

    await this.prisma.pengguna.update({
      where: { id: userId },
      data: { katasandi: hashedPassword },
    });

    return { message: 'Kata sandi berhasil diperbarui.' };
  }
}
