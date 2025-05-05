import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePerusahaanDto } from './dto/create-perusahaan.dto';
import { UpdatePerusahaanDto } from './dto/update-perusahaan.dto';

@Injectable()
export class PerusahaanService {
  constructor(private prisma: PrismaService) {}

  async create(createPerusahaanDto: CreatePerusahaanDto) {
    return await this.prisma.perusahaan.create({
      data: createPerusahaanDto,
    });
  }

  async findAll() {
    return await this.prisma.perusahaan.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.perusahaan.findUnique({
      where: { id },
    });
  }

  async update(id: number, updatePerusahaanDto: UpdatePerusahaanDto) {
    return await this.prisma.perusahaan.update({
      where: { id },
      data: updatePerusahaanDto,
    });
  }

  async remove(id: number) {
    return await this.prisma.perusahaan.delete({
      where: { id },
    });
  }
}
