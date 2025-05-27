import { Test, TestingModule } from '@nestjs/testing';
import { LowonganDisimpanService } from './lowongan-disimpan.service';

describe('LowonganDisimpanService', () => {
  let service: LowonganDisimpanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LowonganDisimpanService],
    }).compile();

    service = module.get<LowonganDisimpanService>(LowonganDisimpanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
