import { Test, TestingModule } from '@nestjs/testing';
import { BatailleController } from './bataille.controller';

describe('BatailleController', () => {
  let controller: BatailleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BatailleController],
    }).compile();

    controller = module.get<BatailleController>(BatailleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
