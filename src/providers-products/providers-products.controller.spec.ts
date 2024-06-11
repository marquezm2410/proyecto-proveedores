import { Test, TestingModule } from '@nestjs/testing';
import { ProvidersProductsController } from './providers-products.controller';
import { ProvidersProductsService } from './providers-products.service';

describe('ProvidersProductsController', () => {
  let controller: ProvidersProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProvidersProductsController],
      providers: [ProvidersProductsService],
    }).compile();

    controller = module.get<ProvidersProductsController>(
      ProvidersProductsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
