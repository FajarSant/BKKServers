import { Test, TestingModule } from '@nestjs/testing';
import { LowonganController } from './lowongan.controller';
import { LowonganService } from './lowongan.service';

describe('LowonganController', () => {
  let controller: LowonganController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LowonganController],
      providers: [LowonganService],
    }).compile();

    controller = module.get<LowonganController>(LowonganController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
