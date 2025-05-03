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

@Controller('pengguna')
export class PenggunaController {
  constructor(private readonly penggunaService: PenggunaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createPenggunaDto: CreatePenggunaDto) {
    return this.penggunaService.create(createPenggunaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.penggunaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePenggunaDto: UpdatePenggunaDto,
  ) {
    return this.penggunaService.update(id, updatePenggunaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.penggunaService.remove(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('import')
  @UseInterceptors(FileInterceptor('file')) 
  async importExcel(@UploadedFile() file: Express.Multer.File) {
    return this.penggunaService.importFromExcel(file);
  }
}
