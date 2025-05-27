import { Module } from '@nestjs/common';
import { LowonganDisimpanService } from './lowongan-disimpan.service';
import { LowonganDisimpanController } from './lowongan-disimpan.controller';

@Module({
  controllers: [LowonganDisimpanController],
  providers: [LowonganDisimpanService],
})
export class LowonganDisimpanModule {}
