import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersProductsService } from './providers-products.service';

describe('ProvidersProductsService', () => {
  let service: ProvidersProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProvidersProductsService],
    }).compile();

    service = module.get<ProvidersProductsService>(ProvidersProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
