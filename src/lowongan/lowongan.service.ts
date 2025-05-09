import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import * as ExcelJS from 'exceljs';
import { JenisPekerjaan, Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLowonganDto } from './dto/create-lowongan.dto';
import { UpdateLowonganDto } from './dto/update-lowongan.dto';

@Injectable()
export class LowonganService {
  constructor(private readonly prisma: PrismaService) {}

  // Fungsi untuk membuat lowongan baru
  async create(dto: CreateLowonganDto) {
    try {
      // Cek apakah perusahaanId ada dalam DTO
      if (!dto.perusahaanId) {
        throw new BadRequestException('Perusahaan ID wajib dimasukkan.');
      }

      // Cek apakah perusahaan dengan perusahaanId ada di database
      const perusahaan = await this.prisma.perusahaan.findUnique({
        where: { id: dto.perusahaanId },
      });

      if (!perusahaan) {
        throw new BadRequestException(
          `Perusahaan dengan ID ${dto.perusahaanId} tidak ditemukan.`
        );
      }

      // Jika perusahaan ada, buat lowongan baru
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
    } catch (err) {
      // Log error yang terjadi
      console.error("Error saat membuat lowongan:", err);
      throw new BadRequestException(
        err instanceof Error ? err.message : 'Gagal membuat lowongan.'
      );
    }
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

  async importFromExcel(file: Express.Multer.File) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);
    const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
      throw new BadRequestException(
        'Worksheet tidak ditemukan dalam file Excel.',
      );
    }

    const importedData: Prisma.LowonganCreateManyInput[] = [];
    const invalidRows: string[] = [];

    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber === 1) return; // Skip header

      const nama = row.getCell(1).text.trim();
      const ketentuan = row.getCell(2).text.trim();
      const persyaratan = row.getCell(3).text.trim();
      const salary = row.getCell(4).text.trim();
      const jenisPekerjaanStr = row.getCell(5).text.trim();
      const perusahaan = row.getCell(6).text.trim();
      const expiredAtStr = row.getCell(7).text.trim();
      const linkPendaftaran = row.getCell(8).text.trim();

      // Validasi wajib
      if (
        !nama ||
        !ketentuan ||
        !persyaratan ||
        !jenisPekerjaanStr ||
        !perusahaan
      ) {
        invalidRows.push(`Baris ${rowNumber}: Data tidak lengkap.`);
        return;
      }

      // Validasi enum JenisPekerjaan
      const allowedJenis: string[] = Object.values(JenisPekerjaan);
      if (!allowedJenis.includes(jenisPekerjaanStr)) {
        invalidRows.push(
          `Baris ${rowNumber}: Jenis pekerjaan tidak valid. Gunakan: ${allowedJenis.join(', ')}`,
        );
        return;
      }

      // Validasi perusahaanId
      const perusahaanId = parseInt(perusahaan);
      if (isNaN(perusahaanId)) {
        invalidRows.push(`Baris ${rowNumber}: Perusahaan ID tidak valid.`);
        return;
      }

      // Validasi expiredAt
      let expiredAt: string | undefined = undefined;
      if (expiredAtStr) {
        const date = new Date(expiredAtStr);
        if (isNaN(date.getTime())) {
          invalidRows.push(
            `Baris ${rowNumber}: Format tanggal expiredAt tidak valid.`,
          );
          return;
        }
        expiredAt = date.toISOString();
      }

      importedData.push({
        nama,
        ketentuan,
        persyaratan,
        salary,
        jenisPekerjaan: jenisPekerjaanStr as JenisPekerjaan,
        perusahaanId,
        expiredAt,
        linkPendaftaran,
      });
    });

    if (importedData.length === 0) {
      throw new BadRequestException(
        invalidRows.length
          ? `Semua baris tidak valid:\n${invalidRows.join('\n')}`
          : 'Tidak ada data valid yang ditemukan dalam file Excel.',
      );
    }

    try {
      const result = await this.prisma.lowongan.createMany({
        data: importedData,
        skipDuplicates: true,
      });

      return {
        message: `${result.count} lowongan berhasil diimpor.`,
        invalidRows,
      };
    } catch (error) {
      throw new BadRequestException('Gagal menyimpan data ke database.');
    }
  }

  async exportToExcelBuffer(): Promise<Buffer> {
    const lowongans = await this.prisma.lowongan.findMany({
      include: {
        perusahaan: true,
      },
      orderBy: {
        dibuatPada: 'desc',
      },
    });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data Lowongan');

    worksheet.columns = [
      { header: 'Nama', key: 'nama', width: 30 },
      { header: 'Ketentuan', key: 'ketentuan', width: 30 },
      { header: 'Persyaratan', key: 'persyaratan', width: 30 },
      { header: 'Salary', key: 'salary', width: 15 },
      { header: 'Jenis Pekerjaan', key: 'jenisPekerjaan', width: 20 },
      { header: 'Nama Perusahaan', key: 'perusahaan', width: 30 },
      { header: 'Expired At', key: 'expiredAt', width: 20 },
      { header: 'Link Pendaftaran', key: 'linkPendaftaran', width: 40 },
    ];

    for (const lowongan of lowongans) {
      worksheet.addRow({
        nama: lowongan.nama,
        ketentuan: lowongan.ketentuan,
        persyaratan: lowongan.persyaratan,
        salary: lowongan.salary,
        jenisPekerjaan: lowongan.jenisPekerjaan,
        perusahaan: lowongan.perusahaanId + ' - ' + lowongan.perusahaan?.nama || '',
        expiredAt: lowongan.expiredAt
          ? lowongan.expiredAt.toISOString().split('T')[0]
          : '',
        linkPendaftaran: lowongan.linkPendaftaran,
      });
    }

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
}
