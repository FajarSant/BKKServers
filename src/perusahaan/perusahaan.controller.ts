import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  BadRequestException,
  Res,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { PerusahaanService } from './perusahaan.service';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';
import { PeranPengguna } from 'src/common/enums/peran.enum';
import { Peran } from 'src/common/decorator/peran.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/peran.guard';

@Controller('perusahaan')
export class PerusahaanController {
  constructor(private readonly perusahaanService: PerusahaanService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.siswa, PeranPengguna.alumni, PeranPengguna.admin)
  @Post('create')
  async create(@Body() createPerusahaanDto: CreatePerusahaanDto) {
    try {
      const perusahaan =
        await this.perusahaanService.create(createPerusahaanDto);
      const total = await this.perusahaanService.findAll();
      return {
        message: 'Perusahaan berhasil dibuat.',
        data: perusahaan,
        jumlahPesan: total.length,
      };
    } catch (error) {
      throw new BadRequestException(
        'Terjadi kesalahan saat membuat perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.siswa, PeranPengguna.alumni, PeranPengguna.admin)
  @Get('getall')
  async findAll() {
    try {
      const perusahaan = await this.perusahaanService.findAll();
      return {
        message:
          perusahaan.length > 0
            ? 'Data perusahaan berhasil diambil.'
            : 'Tidak ada perusahaan yang ditemukan.',
        data: perusahaan,
        jumlahPesan: perusahaan.length,
      };
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat mengambil data perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.siswa, PeranPengguna.alumni, PeranPengguna.admin)
  @Get('get/:id')
  async findOne(@Param('id') id: number) {
    try {
      const perusahaan = await this.perusahaanService.findOne(id);
      if (!perusahaan) {
        throw new BadRequestException(
          `Perusahaan dengan ID ${id} tidak ditemukan.`,
        );
      }
      return {
        message: 'Data perusahaan ditemukan.',
        data: perusahaan,
      };
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat mengambil data perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Put('update/:id')
  async update(
    @Param('id') id: number,
    @Body() updatePerusahaanDto: UpdatePerusahaanDto,
  ) {
    try {
      const perusahaan = await this.perusahaanService.update(
        id,
        updatePerusahaanDto,
      );
      return {
        message: 'Perusahaan berhasil diperbarui.',
        data: perusahaan,
      };
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat memperbarui perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    try {
      const perusahaan = await this.perusahaanService.remove(id);
      return {
        message: 'Perusahaan berhasil dihapus.',
        data: perusahaan,
      };
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat menghapus perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Get('export')
  async exportExcel(@Res() res: Response) {
    try {
      const buffer =
        await this.perusahaanService.exportPerusahaanToExcelBuffer();
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=perusahaan.xlsx',
      );
      res.send(buffer);
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat mengekspor perusahaan.',
      );
    }
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async importExcel(@UploadedFile() file: Express.Multer.File) {
    try {
      const result =
        await this.perusahaanService.importPerusahaanFromExcel(file);
      return {
        message: result.message,
        skippedRows: result.skippedRows,
      };
    } catch {
      throw new BadRequestException(
        'Terjadi kesalahan saat mengimpor perusahaan.',
      );
    }
  }
}
