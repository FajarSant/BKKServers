import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLowonganDto } from './dto/create-lowongan.dto';
import { UpdateLowonganDto } from './dto/update-lowongan.dto';

@Injectable()
export class LowonganService {
  constructor(private readonly prisma: PrismaService) {}

  // Fungsi untuk membuat lowongan baru
  async create(dto: CreateLowonganDto) {
    const lowongan = await this.prisma.lowongan.create({
      data: {
        nama: dto.nama,
        ketentuan: dto.ketentuan,
        persyaratan: dto.persyaratan,
        salary: dto.salary,
        jenisPekerjaan: dto.jenisPekerjaan,
        perusahaanId: dto.perusahaanId,
        expiredAt: dto.expiredAt ? new Date(dto.expiredAt) : null,
        linkPendaftaran: dto.linkPendaftaran,
      },
      include: {
        perusahaan: true, // Menyertakan data perusahaan terkait
      },
    });

    return {
      message: 'Lowongan berhasil dibuat.',
      data: lowongan,
    };
  }

  // Fungsi untuk mendapatkan semua lowongan
  async findAll() {
    const lowongans = await this.prisma.lowongan.findMany({
      include: {
        perusahaan: true, // Menyertakan data perusahaan terkait
      },
      orderBy: {
        dibuatPada: 'desc',
      },
    });

    return {
      message: 'Daftar lowongan berhasil diambil.',
      data: lowongans,
    };
  }

  // Fungsi untuk mendapatkan satu lowongan berdasarkan ID
  async findOne(id: number) {
    const lowongan = await this.prisma.lowongan.findUnique({
      where: { id },
      include: {
        perusahaan: true, // Menyertakan data perusahaan terkait
      },
    });

    if (!lowongan) {
      throw new NotFoundException('Lowongan tidak ditemukan.');
    }

    return {
      message: 'Data lowongan berhasil diambil.',
      data: lowongan,
    };
  }

  // Fungsi untuk memperbarui lowongan berdasarkan ID
  async update(id: number, dto: UpdateLowonganDto) {
    const exists = await this.prisma.lowongan.findUnique({ where: { id } });
    if (!exists) {
      throw new NotFoundException('Lowongan tidak ditemukan.');
    }

    const updatedLowongan = await this.prisma.lowongan.update({
      where: { id },
      data: {
        nama: dto.nama,
        ketentuan: dto.ketentuan,
        persyaratan: dto.persyaratan,
        salary: dto.salary,
        jenisPekerjaan: dto.jenisPekerjaan,
        expiredAt: dto.expiredAt ? new Date(dto.expiredAt) : undefined,
        linkPendaftaran: dto.linkPendaftaran,
      },
      include: {
        perusahaan: true, // Menyertakan data perusahaan terkait
      },
    });

    return {
      message: 'Lowongan berhasil diperbarui.',
      data: updatedLowongan,
    };
  }

  // Fungsi untuk menghapus lowongan berdasarkan ID
  async remove(id: number) {
    const exists = await this.prisma.lowongan.findUnique({ where: { id } });
    if (!exists) {
      throw new NotFoundException('Lowongan tidak ditemukan.');
    }

    const deletedLowongan = await this.prisma.lowongan.delete({
      where: { id },
      include: {
        perusahaan: true, // Menyertakan data perusahaan terkait
      },
    });

    return {
      message: 'Lowongan berhasil dihapus.',
      data: deletedLowongan,
    };
  }

}
