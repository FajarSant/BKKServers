import { Test, TestingModule } from '@nestjs/testing';
import { LowonganDisimpanController } from './lowongan-disimpan.controller';
import { LowonganDisimpanService } from './lowongan-disimpan.service';

describe('LowonganDisimpanController', () => {
  let controller: LowonganDisimpanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LowonganDisimpanController],
      providers: [LowonganDisimpanService],
    }).compile();

    controller = module.get<LowonganDisimpanController>(LowonganDisimpanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
