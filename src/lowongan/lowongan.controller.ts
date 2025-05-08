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
} from '@nestjs/common';
import { LowonganService } from './lowongan.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateLowonganDto } from './dto/create-lowongan.dto';
import { UpdateLowonganDto } from './dto/update-lowongan.dto';
import { Peran } from 'src/common/decorator/peran.decorator';
import { PeranPengguna } from 'src/common/enums/peran.enum';
import { RolesGuard } from 'src/common/guards/peran.guard';

@Controller('lowongan')
export class LowonganController {
  constructor(private readonly lowonganService: LowonganService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Post()
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

  @Get()
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

  @Get(':id')
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
  @Put(':id')
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
  @Delete(':id')
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
 
}
