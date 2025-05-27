import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LowonganDisimpanService {
  constructor(private prisma: PrismaService) {}

  async create(penggunaId: number, lowonganId: number) {
    const pengguna = await this.prisma.pengguna.findUnique({ where: { id: penggunaId } });
    if (!pengguna) {
      return {
        status: 'error',
        message: 'Pengguna tidak ditemukan',
      };
    }

    const lowongan = await this.prisma.lowongan.findUnique({ where: { id: lowonganId } });
    if (!lowongan) {
      return {
        status: 'error',
        message: 'Lowongan tidak ditemukan',
      };
    }

    const existing = await this.prisma.lowonganDisimpan.findFirst({
      where: { penggunaId, lowonganId },
    });

    if (existing) {
      return {
        status: 'error',
        message: 'Lowongan sudah disimpan sebelumnya.',
      };
    }

    const saved = await this.prisma.lowonganDisimpan.create({
      data: { penggunaId, lowonganId },
    });

    return {
      status: 'success',
      message: 'Lowongan berhasil disimpan.',
      data: {
        id: saved.id,
        tanggal: saved.tanggal,
        pengguna: {
          id: pengguna.id,
          nama: pengguna.nama,
          email: pengguna.email,
        },
        lowongan: {
          id: lowongan.id,
          nama: lowongan.nama,
          jenisPekerjaan: lowongan.jenisPekerjaan,
          perusahaanId: lowongan.perusahaanId,
        },
      },
    };
  }

  async findByPenggunaId(penggunaId: number) {
    const pengguna = await this.prisma.pengguna.findUnique({
      where: { id: penggunaId },
    });

    if (!pengguna) {
      return {
        status: 'error',
        message: 'Pengguna tidak ditemukan.',
        data: null,
      };
    }

    const results = await this.prisma.lowonganDisimpan.findMany({
      where: { penggunaId },
      include: {
        lowongan: true,
      },
    });

    return {
      status: 'success',
      message: 'Daftar lowongan disimpan berhasil diambil.',
      data: results,
    };
  }

async remove(penggunaId: number, lowonganId: number) {
  const saved = await this.prisma.lowonganDisimpan.findFirst({
    where: { penggunaId, lowonganId },
  });

  if (!saved) {
    return {
      status: 'error',
      message: `Lowongan ID ${lowonganId} tidak ditemukan dalam simpanan pengguna ID ${penggunaId}.`,
      data: null,
    };
  }

  const lowongan = await this.prisma.lowongan.findUnique({
    where: { id: lowonganId },
  });

  await this.prisma.lowonganDisimpan.delete({
    where: { id: saved.id },
  });

  return {
    status: 'success',
    message: 'Lowongan berhasil dihapus dari simpanan.',
    data: {
      id: saved.id,
      penggunaId: saved.penggunaId,
      lowonganId: saved.lowonganId,
      tanggal: saved.tanggal,
      lowongan: lowongan
        ? {
            id: lowongan.id,
            nama: lowongan.nama,
            ketentuan: lowongan.ketentuan,
            persyaratan: lowongan.persyaratan,
            salary: lowongan.salary,
            jenisPekerjaan: lowongan.jenisPekerjaan,
            perusahaanId: lowongan.perusahaanId,
            dibuatPada: lowongan.dibuatPada,
            expiredAt: lowongan.expiredAt,
            linkPendaftaran: lowongan.linkPendaftaran,
          }
        : null,
    },
  };
}

}
