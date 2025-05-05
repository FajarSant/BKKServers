import { Test, TestingModule } from '@nestjs/testing';
import { PerusahaanController } from './perusahaan.controller';
import { PerusahaanService } from './perusahaan.service';

describe('PerusahaanController', () => {
  let controller: PerusahaanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerusahaanController],
      providers: [PerusahaanService],
    }).compile();

    controller = module.get<PerusahaanController>(PerusahaanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
