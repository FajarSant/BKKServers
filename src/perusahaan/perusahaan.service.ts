import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';
import * as ExcelJS from 'exceljs';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';

@Injectable()
export class PerusahaanService {
  constructor(private prisma: PrismaService) {}

  async create(createPerusahaanDto: CreatePerusahaanDto) {
    return this.prisma.perusahaan.create({ data: createPerusahaanDto });
  }

  async findAll() {
    return this.prisma.perusahaan.findMany({
      include: {
        lowongan: true,
      },
    });
  }

  async findOne(id: number) {
    return this.prisma.perusahaan.findUnique({
      where: { id },
      include: {
        lowongan: true,
      },
    });
  }

  async update(id: number, updatePerusahaanDto: UpdatePerusahaanDto) {
    return this.prisma.perusahaan.update({
      where: { id },
      data: updatePerusahaanDto,
    });
  }

  async remove(id: number) {
    const lowongan = await this.prisma.lowongan.findMany({
      where: {
        perusahaanId: id,
      },
      select: {
        id: true,
        nama: true,
      },
    });

    if (lowongan.length > 0) {
      await this.prisma.lowongan.deleteMany({
        where: {
          perusahaanId: id,
        },
      });
      const lowonganNames = lowongan
        .map((l) => `${l.id} - ${l.nama}`)
        .join(', ');

      console.log(`Lowongan terkait perusahaan dihapus: ${lowonganNames}`);
    }

    return this.prisma.perusahaan.delete({
      where: { id },
    });
  }

  async exportPerusahaanToExcelBuffer(): Promise<Buffer> {
    try {
      const perusahaanList = await this.prisma.perusahaan.findMany();

      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Data Perusahaan');

      worksheet.columns = [
        { header: 'Nama', key: 'nama', width: 30 },
        { header: 'Gambar', key: 'gambar', width: 30 },
        { header: 'Alamat', key: 'alamat', width: 40 },
        { header: 'Email', key: 'email', width: 30 },
        { header: 'Telepon', key: 'telepon', width: 20 },
        { header: 'Deskripsi', key: 'deskripsi', width: 40 },
      ];

      perusahaanList.forEach((p) => {
        worksheet.addRow({
          nama: p.nama,
          gambar: p.gambar || '',
          alamat: p.alamat,
          email: p.email,
          telepon: p.telepon || '',
          deskripsi: p.deskripsi || '',
        });
      });

      const buffer = await workbook.xlsx.writeBuffer();
      return Buffer.from(buffer);
    } catch (err) {
      console.error('Error export Excel:', err);
      throw new BadRequestException('Gagal mengekspor data perusahaan.');
    }
  }

  async importPerusahaanFromExcel(file: Express.Multer.File) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);
    const worksheet = workbook.getWorksheet(1);

    if (!worksheet) {
      throw new BadRequestException(
        'Worksheet tidak ditemukan dalam file Excel.',
      );
    }

    const importedData: Prisma.PerusahaanCreateManyInput[] = [];
    const skippedRows: string[] = [];

    const getText = (value: ExcelJS.CellValue): string =>
      typeof value === 'string'
        ? value.trim()
        : typeof value === 'number'
          ? value.toString()
          : '';

    for (let i = 2; i <= worksheet.rowCount; i++) {
      const row = worksheet.getRow(i);
      const nama = getText(row.getCell(1).value);
      const gambar = getText(row.getCell(2).value);
      const alamat = getText(row.getCell(3).value);
      const email = getText(row.getCell(4).value).toLowerCase();
      const telepon = getText(row.getCell(5).value);
      const deskripsi = getText(row.getCell(6).value);

      if (!nama || !alamat || !email) {
        skippedRows.push(`Baris ${i}: Nama, Alamat, atau Email wajib diisi.`);
        continue;
      }

      const existing = await this.prisma.perusahaan.findUnique({
        where: { email },
      });
      if (existing) {
        skippedRows.push(`Baris ${i}: Email sudah terdaftar.`);
        continue;
      }

      importedData.push({ nama, gambar, alamat, email, telepon, deskripsi });
    }

    if (importedData.length === 0) {
      throw new BadRequestException({
        message: 'Tidak ada data valid untuk diimpor.',
        detail: skippedRows,
      });
    }

    const result = await this.prisma.perusahaan.createMany({
      data: importedData,
      skipDuplicates: true,
    });

    return {
      message: `${result.count} perusahaan berhasil diimpor.`,
      skippedRows,
    };
  }
}
