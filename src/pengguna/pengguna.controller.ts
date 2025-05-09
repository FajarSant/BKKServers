import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { PenggunaService } from './pengguna.service';
import { CreatePenggunaDto } from './dto/create-pengguna.dto';
import { UpdatePenggunaDto } from './dto/update-pengguna.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { RolesGuard } from 'src/common/guards/peran.guard';
import { PeranPengguna } from '../common/enums/peran.enum';
import { Peran } from 'src/common/decorator/peran.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('pengguna')
export class PenggunaController {
  constructor(private readonly penggunaService: PenggunaService) {}

  @Post('/create')
  @Peran(PeranPengguna.admin)
  create(@Body() createPenggunaDto: CreatePenggunaDto) {
    return this.penggunaService.create(createPenggunaDto);
  }

  @Get('/getall')
  @Peran(PeranPengguna.admin)
  findAll() {
    return this.penggunaService.findAll();
  }

  @Get('get/:id')
  @Peran(PeranPengguna.admin)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.findOne(id);
  }

  @Patch('update/:id')
  @Peran(PeranPengguna.admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePenggunaDto: UpdatePenggunaDto,
  ) {
    return this.penggunaService.update(id, updatePenggunaDto);
  }

  @Delete('delete/:id')
  @Peran(PeranPengguna.admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.remove(id);
  }

  @Post('/import')
  @Peran(PeranPengguna.admin)
  @UseInterceptors(FileInterceptor('file'))
  async importExcel(@UploadedFile() file: Express.Multer.File) {
    return this.penggunaService.importFromExcel(file);
  }

  @Get('/export')
  @Peran(PeranPengguna.admin)
  async exportExcel(@Res() res: Response) {
    const buffer = await this.penggunaService.exportToExcelBuffer();

    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader(
      'Content-Disposition',
      'attachment; filename=pengguna-data.xlsx',
    );

    res.send(buffer);
  }
}
