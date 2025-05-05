import { Module } from '@nestjs/common';
import { PerusahaanService } from './perusahaan.service';
import { PerusahaanController } from './perusahaan.controller';

@Module({
  controllers: [PerusahaanController],
  providers: [PerusahaanService],
})
export class PerusahaanModule {}
