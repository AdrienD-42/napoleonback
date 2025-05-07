import { Test, TestingModule } from '@nestjs/testing';
import { BatailleService } from './bataille.service';

describe('BatailleService', () => {
  let service: BatailleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BatailleService],
    }).compile();

    service = module.get<BatailleService>(BatailleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
