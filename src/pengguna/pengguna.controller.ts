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
} from '@nestjs/common';
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

  @Post()
  @Peran(PeranPengguna.admin)
  create(@Body() createPenggunaDto: CreatePenggunaDto) {
    return this.penggunaService.create(createPenggunaDto);
  }

  @Get()
  @Peran(PeranPengguna.admin)
  findAll() {
    return this.penggunaService.findAll();
  }

  @Get(':id')
  @Peran(PeranPengguna.admin)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.findOne(id);
  }

  @Patch(':id')
  @Peran(PeranPengguna.admin)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePenggunaDto: UpdatePenggunaDto,
  ) {
    return this.penggunaService.update(id, updatePenggunaDto);
  }

  @Delete(':id')
  @Peran(PeranPengguna.admin)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.remove(id);
  }

  @Post('import')
  @Peran(PeranPengguna.admin)
  @UseInterceptors(FileInterceptor('file'))
  async importExcel(@UploadedFile() file: Express.Multer.File) {
    return this.penggunaService.importFromExcel(file);
  }
}
