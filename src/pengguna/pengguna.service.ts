import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class PenggunaService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePenggunaDto) {
    const hashedPassword = await bcrypt.hash(data.katasandi, 10);

    try {
      return await this.prisma.pengguna.create({
        data: {
          ...data,
          katasandi: hashedPassword,
        },
      });
    } catch (error) {
      throw new BadRequestException('Email atau NISN sudah terdaftar.');
    }
  }

  findAll() {
    return this.prisma.pengguna.findMany({
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

  async findOne(id: number) {
    const pengguna = await this.prisma.pengguna.findUnique({ where: { id } });
    if (!pengguna) throw new NotFoundException('Pengguna tidak ditemukan.');
    return pengguna;
  }

  async update(id: number, data: UpdatePenggunaDto) {
    if (data.katasandi) {
      data.katasandi = await bcrypt.hash(data.katasandi, 10);
    }

    try {
      return await this.prisma.pengguna.update({
        where: { id },
        data,
      });
    } catch {
      throw new NotFoundException('Pengguna dengan ID tersebut tidak ditemukan.');
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pengguna.delete({ where: { id } });
  }
}
