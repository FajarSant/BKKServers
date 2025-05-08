import { Module } from '@nestjs/common';
import { LowonganService } from './lowongan.service';
import { LowonganController } from './lowongan.controller';

@Module({
  controllers: [LowonganController],
  providers: [LowonganService],
})
export class LowonganModule {}
