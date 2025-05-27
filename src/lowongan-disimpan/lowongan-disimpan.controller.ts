import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  ParseIntPipe,
  HttpStatus,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { LowonganDisimpanService } from './lowongan-disimpan.service';
import { CreateLowonganDisimpanDto } from './dto/create-lowongan-disimpan.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/peran.guard';
import { Peran } from 'src/common/decorator/peran.decorator';
import { PeranPengguna } from 'src/common/enums/peran.enum';

@Controller('lowongan-disimpan')
export class LowonganDisimpanController {
  constructor(private readonly service: LowonganDisimpanService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Peran(PeranPengguna.admin)
  @Post()
  async create(@Body() dto: CreateLowonganDisimpanDto, @Res() res: Response) {
    const { penggunaId, lowonganId } = dto;
    const result = await this.service.create(penggunaId, lowonganId);
    const statusCode =
      result.status === 'success' ? HttpStatus.CREATED : HttpStatus.BAD_REQUEST;

    return res.status(statusCode).json({
      statusCode,
      status: result.status,
      message: result.message,
      data: result.data ?? null,
    });
  }

  @Get('/:penggunaId')
  async findByPenggunaId(
    @Param('penggunaId', ParseIntPipe) penggunaId: number,
  ) {
    const result = await this.service.findByPenggunaId(penggunaId);

    const statusCode =
      result.status === 'success' ? HttpStatus.OK : HttpStatus.NOT_FOUND;

    return {
      statusCode,
      status: result.status,
      message: result.message,
      data: result.data ?? [],
    };
  }

  @Delete(':penggunaId/:lowonganId')
  async remove(
    @Param('penggunaId', ParseIntPipe) penggunaId: number,
    @Param('lowonganId', ParseIntPipe) lowonganId: number,
  ) {
    const result = await this.service.remove(penggunaId, lowonganId);

    const statusCode =
      result.status === 'success' ? HttpStatus.OK : HttpStatus.NOT_FOUND;

    return {
      statusCode,
      status: result.status,
      message: result.message,
      data: result.data ?? null,
    };
  }
}
