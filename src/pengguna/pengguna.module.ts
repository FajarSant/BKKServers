import { Module } from '@nestjs/common';
import { PenggunaService } from './pengguna.service';
import { PenggunaController } from './pengguna.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PenggunaController],
  providers: [PenggunaService, PrismaService],
})
export class PenggunaModule {}
