import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';

@Controller('perusahaan')
export class PerusahaanController {
  constructor(private readonly perusahaanService: PerusahaanService) {}

  @Post()
  async create(@Body() createPerusahaanDto: CreatePerusahaanDto) {
    try {
      const perusahaan =
        await this.perusahaanService.create(createPerusahaanDto);

      const totalPerusahaan = await this.perusahaanService.findAll();

      const jumlahPerusahaan = totalPerusahaan.length;

      return {
        message: 'Perusahaan berhasil dibuat.',
        data: perusahaan,
        jumlahPesan: jumlahPerusahaan,
      };
    } catch (error) {
      throw new BadRequestException(
        'Terjadi kesalahan saat membuat perusahaan. Silakan coba lagi.',
      );
    }
  }

  @Get()
  async findAll() {
    try {
      const perusahaan = await this.perusahaanService.findAll();
      const jumlahPesan = perusahaan.length;

      if (perusahaan.length === 0) {
        return {
          message: 'Tidak ada perusahaan yang ditemukan.',
          data: [],
          jumlahPesan: jumlahPesan,
        };
      }
      return {
        message: 'Data perusahaan berhasil diambil.',
        data: perusahaan,
        jumlahPesan: jumlahPesan,
      };
    } catch (error) {
      throw new BadRequestException(
        'Terjadi kesalahan saat mengambil data perusahaan.',
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      const perusahaan = await this.perusahaanService.findOne(id);
      if (!perusahaan) {
        throw new NotFoundException(
          `Perusahaan dengan ID ${id} tidak ditemukan.`,
        );
      }
      return {
        message: 'Data perusahaan ditemukan.',
        data: perusahaan,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new BadRequestException(
            'Terjadi kesalahan saat mengambil data perusahaan.',
          );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updatePerusahaanDto: UpdatePerusahaanDto,
  ) {
    try {
      const perusahaan = await this.perusahaanService.update(
        id,
        updatePerusahaanDto,
      );
      if (!perusahaan) {
        throw new NotFoundException(
          `Perusahaan dengan ID ${id} tidak ditemukan untuk diperbarui.`,
        );
      }
      return {
        message: 'Perusahaan berhasil diperbarui.',
        data: perusahaan,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new BadRequestException(
            'Terjadi kesalahan saat memperbarui perusahaan.',
          );
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      const perusahaan = await this.perusahaanService.remove(id);
      if (!perusahaan) {
        throw new NotFoundException(
          `Perusahaan dengan ID ${id} tidak ditemukan untuk dihapus.`,
        );
      }
      return {
        message: 'Perusahaan berhasil dihapus.',
        data: perusahaan,
        jumlahPesan: 1,
      };
    } catch (error) {
      throw error instanceof NotFoundException
        ? error
        : new BadRequestException(
            'Terjadi kesalahan saat menghapus perusahaan.',
          );
    }
  }
}
