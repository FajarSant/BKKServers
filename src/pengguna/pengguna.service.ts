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
import * as path from 'path';
import { JenisKelamin, PeranPengguna, Prisma } from '@prisma/client';

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

  // Export pengguna ke file Excel
  async exportToExcel() {
    const penggunaList = await this.findAll();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Pengguna Data');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
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
      worksheet.addRow({
        id: pengguna.id,
        nama: pengguna.nama,
        email: pengguna.email,
        peran: pengguna.peran,
        nisn: pengguna.nisn,
        alamat: pengguna.alamat,
        telepon: pengguna.telepon,
        tanggalLahir: pengguna.tanggalLahir,
        jenisKelamin: pengguna.jenisKelamin,
        dibuatPada: pengguna.dibuatPada,
      });
    });

    const filePath = path.join(__dirname, 'pengguna-data.xlsx');
    await workbook.xlsx.writeFile(filePath);
    return filePath;
  }

  // Import pengguna dari file Excel
  async importFromExcel(file: Express.Multer.File) {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(file.buffer);
  
    const worksheet = workbook.getWorksheet(1);
    if (!worksheet) {
      throw new BadRequestException('Worksheet tidak ditemukan dalam file Excel.');
    }
  
    const importedData: Prisma.PenggunaCreateManyInput[] = [];
    const invalidRows: string[] = []; // Untuk menyimpan informasi baris yang invalid
  
    // Fungsi bantu untuk konversi nilai cell ke string
    const getCellText = (value: ExcelJS.CellValue): string => {
      if (typeof value === 'string') return value.trim();
      if (typeof value === 'number') return value.toString();
      if (value && typeof value === 'object' && 'text' in value) {
        return (value as { text: string }).text.trim();
      }
      return '';
    };
  
    // Looping melalui setiap baris untuk memeriksa dan mengolah data
    for (let rowNumber = 2; rowNumber <= worksheet.rowCount; rowNumber++) {
      const row = worksheet.getRow(rowNumber);
  
      // Ambil data dari setiap kolom
      const nama = getCellText(row.getCell(1).value);
      const email = getCellText(row.getCell(2).value);
      const peranStr = getCellText(row.getCell(3).value);
      const nisn = getCellText(row.getCell(4).value);
      const alamat = getCellText(row.getCell(5).value);
      const telepon = getCellText(row.getCell(6).value);
      const tanggalLahirRaw = row.getCell(7).value;
      const jenisKelaminStr = getCellText(row.getCell(8).value);
  
      // Validasi kolom yang dibutuhkan
      if (!email || !nama || !peranStr || !jenisKelaminStr) {
        invalidRows.push(`Baris ${rowNumber}: Email, Nama, Peran, atau Jenis Kelamin tidak lengkap.`);
        continue; // Lewati data yang tidak valid
      }
  
      // Validasi peran
      const validPeran = ['admin', 'siswa', 'guru'];
      if (!validPeran.includes(peranStr)) {
        invalidRows.push(`Baris ${rowNumber}: Peran tidak valid. Harus salah satu dari ${validPeran.join(', ')}.`);
        continue;
      }
  
      // Validasi jenis kelamin
      const validJenisKelamin = ['laki_laki', 'perempuan'];
      if (!validJenisKelamin.includes(jenisKelaminStr)) {
        invalidRows.push(`Baris ${rowNumber}: Jenis Kelamin tidak valid. Harus salah satu dari ${validJenisKelamin.join(', ')}.`);
        continue;
      }
  
      // Convert peran dan jenisKelamin ke enum yang sesuai
      const peran = peranStr as Prisma.PenggunaCreateManyInput['peran'];
      const jenisKelamin = jenisKelaminStr as Prisma.PenggunaCreateManyInput['jenisKelamin'];
  
      // Tanggal lahir aman (jika tidak valid, skip row)
      const tanggalLahir =
        tanggalLahirRaw instanceof Date
          ? tanggalLahirRaw
          : new Date(getCellText(tanggalLahirRaw));
  
      if (isNaN(tanggalLahir.getTime())) {
        invalidRows.push(`Baris ${rowNumber}: Tanggal Lahir tidak valid.`);
        continue; // Skip jika tanggal tidak valid
      }
  
      const hashedPassword = await bcrypt.hash('password123', 10); // Password default
  
      // Jika data valid, tambahkan ke dalam array import
      importedData.push({
        nama,
        email,
        peran,
        nisn,
        alamat,
        telepon,
        tanggalLahir,
        jenisKelamin,
        katasandi: hashedPassword,
      });
    }
  
    // Jika tidak ada data yang valid
    if (importedData.length === 0) {
      if (invalidRows.length === 0) {
        throw new BadRequestException('Tidak ada data valid yang ditemukan dalam file Excel.');
      } else {
        throw new BadRequestException(`Tidak ada data valid yang ditemukan. Kesalahan pada baris: ${invalidRows.join(', ')}`);
      }
    }
  
    // Simpan data ke database
    try {
      const created = await this.prisma.pengguna.createMany({
        data: importedData,
        skipDuplicates: true,
      });
  
      return {
        message: `Data pengguna berhasil diimpor. ${created.count} baris data berhasil diproses.`,
        invalidRows: invalidRows, // Menyertakan informasi baris yang invalid
        count: created.count,
      };
    } catch (error) {
      throw new InternalServerErrorException('Terjadi kesalahan saat menyimpan data ke database.');
    }
  }
  
}
