import {
  Injectable,
  NotFoundException,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import * as bcrypt from 'bcryptjs';
import * as ExcelJS from 'exceljs';
import { Buffer } from 'buffer';
import { Prisma } from '@prisma/client';

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
      throw new NotFoundException(
        'Pengguna dengan ID tersebut tidak ditemukan.',
      );
    }
  }

  async remove(id: number) {
    await this.findOne(id);
    return this.prisma.pengguna.delete({ where: { id } });
  }
  async exportToExcelBuffer(): Promise<Buffer> {
    const penggunaList = await this.findAll();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Pengguna Data');

    worksheet.columns = [
      // { header: 'ID', key: 'id', width: 10 },
      { header: 'Nama', key: 'nama', width: 30 },
      { header: 'Email', key: 'email', width: 30 },
      { header: 'Peran', key: 'peran', width: 15 },
      { header: 'NISN', key: 'nisn', width: 20 },
      { header: 'Alamat', key: 'alamat', width: 50 },
      { header: 'Telepon', key: 'telepon', width: 20 },
      { header: 'Tanggal Lahir', key: 'tanggalLahir', width: 20 },
      { header: 'Jenis Kelamin', key: 'jenisKelamin', width: 15 },
      { header: 'Dibuat Pada', key: 'dibuatPada', width: 20 },
    ];

    penggunaList.forEach((pengguna) => {
      worksheet.addRow(pengguna);
    });

    const arrayBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(arrayBuffer);
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

    const importedData: Prisma.PenggunaCreateManyInput[] = [];
    const invalidRows: string[] = [];

    const getCellText = (value: ExcelJS.CellValue): string => {
      if (typeof value === 'string') return value.trim();
      if (typeof value === 'number') return value.toString();
      if (value && typeof value === 'object' && 'text' in value) {
        return (value as { text: string }).text.trim();
      }
      return '';
    };

    const validPeran = ['admin', 'siswa', 'guru'];
    const validJenisKelamin = ['laki_laki', 'perempuan'];

    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber);

      const nama = getCellText(row.getCell(1).value);
      const email = getCellText(row.getCell(2).value).toLowerCase();
      const peranStr = getCellText(row.getCell(3).value).toLowerCase();
      const nisn = getCellText(row.getCell(4).value);
      const alamat = getCellText(row.getCell(5).value);
      const telepon = getCellText(row.getCell(6).value);
      const tanggalLahirRaw = row.getCell(7).value;
      const jenisKelaminStr = getCellText(row.getCell(8).value).toLowerCase();

      if (!email || !nama || !peranStr || !jenisKelaminStr || !nisn) {
        invalidRows.push(
          `Baris ${rowNumber}: Email, Nama, Peran, NISN, atau Jenis Kelamin tidak lengkap.`,
        );
        continue;
      }

      if (!validPeran.includes(peranStr)) {
        invalidRows.push(
          `Baris ${rowNumber}: Peran tidak valid. Harus salah satu dari: ${validPeran.join(', ')}.`,
        );
        continue;
      }

      if (!validJenisKelamin.includes(jenisKelaminStr)) {
        invalidRows.push(
          `Baris ${rowNumber}: Jenis Kelamin tidak valid. Harus laki_laki atau perempuan.`,
        );
        continue;
      }
      let tanggalLahir: Date;
      if (tanggalLahirRaw instanceof Date) {
        tanggalLahir = tanggalLahirRaw;
      } else {
        const parsed = new Date(getCellText(tanggalLahirRaw));
        if (isNaN(parsed.getTime())) {
          invalidRows.push(`Baris ${rowNumber}: Tanggal Lahir tidak valid.`);
          continue;
        }
        tanggalLahir = parsed;
      }
      const existing = await this.prisma.pengguna.findFirst({
        where: {
          OR: [{ email: email }, { nisn: nisn }],
        },
        select: { id: true },
      });

      if (existing) {
        invalidRows.push(
          `Baris ${rowNumber}: Email atau NISN sudah ada, dilewati.`,
        );
        continue;
      }

      const hashedPassword = await bcrypt.hash('password123', 10);

      importedData.push({
        nama,
        email,
        peran: peranStr as Prisma.PenggunaCreateManyInput['peran'],
        nisn,
        alamat,
        telepon,
        tanggalLahir,
        jenisKelamin:
          jenisKelaminStr as Prisma.PenggunaCreateManyInput['jenisKelamin'],
        katasandi: hashedPassword,
      });
    }

    if (importedData.length === 0) {
      throw new BadRequestException({
        message: 'Tidak ada data valid yang dapat diimpor.',
        detail: invalidRows,
      });
    }

    try {
      const result = await this.prisma.pengguna.createMany({
        data: importedData,
        skipDuplicates: true,
      });

      return {
        message: `Import berhasil. ${result.count} pengguna ditambahkan.`,
        invalidRows,
      };
    } catch (error) {
      console.error('Gagal menyimpan ke database:', error);
      throw new InternalServerErrorException({
        message: 'Terjadi kesalahan saat menyimpan ke database.',
        detail: error.message,
      });
    }
  }
}
