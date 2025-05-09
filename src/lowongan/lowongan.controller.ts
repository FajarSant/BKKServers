import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseGuards,
  Res,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { Response } from 'express';
import { LowonganService } from './lowongan.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateLowonganDto } from './dto/create-lowongan.dto';
import { UpdateLowonganDto } from './dto/update-lowongan.dto';
import { Peran } from 'src/common/decorator/peran.decorator';
import { PeranPengguna } from 'src/common/enums/peran.enum';
import { RolesGuard } from 'src/common/guards/peran.guard';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('lowongan')
export class LowonganController {
  constructor(private readonly lowonganService: LowonganService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Post('create')
  async create(@Body() dto: CreateLowonganDto) {
    try {
      const response = await this.lowonganService.create(dto);
      return response;
    } catch (err) {
      throw new HttpException(
        'Gagal membuat lowongan.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('getall')
  async findAll() {
    try {
      const response = await this.lowonganService.findAll();
      return response;
    } catch (err) {
      throw new HttpException(
        'Gagal mengambil daftar lowongan.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('get/:id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    try {
      const response = await this.lowonganService.findOne(id);
      return response;
    } catch (err) {
      throw new HttpException(
        'Lowongan tidak ditemukan.',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Peran(PeranPengguna.admin)
  @Put('update/:id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateLowonganDto,
  ) {
    try {
      const response = await this.lowonganService.update(id, dto);
      return response;
    } catch (err) {
      throw new HttpException(
        'Gagal memperbarui lowongan.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Peran(PeranPengguna.admin)
  @Delete('delete/:id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    try {
      const response = await this.lowonganService.remove(id);
      return response;
    } catch (err) {
      throw new HttpException(
        'Gagal menghapus lowongan.',
        HttpStatus.BAD_REQUEST,
      );
    }
  }
  @Get('export')
  @Peran(PeranPengguna.admin)
  async exportExcel(@Res() res: Response) {
    const buffer = await this.lowonganService.exportToExcelBuffer();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=lowongan-data.xlsx',
    );

    res.send(buffer);
  }

  @Post('import')
  @Peran(PeranPengguna.admin)
  @UseInterceptors(FileInterceptor('file'))
  async importExcel(@UploadedFile() file: Express.Multer.File) {
    return this.lowonganService.importFromExcel(file);
  }
}
