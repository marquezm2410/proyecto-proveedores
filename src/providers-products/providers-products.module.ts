import { Module } from '@nestjs/common';
import { ProvidersProductsService } from './providers-products.service';
import { ProvidersProductsController } from './providers-products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProviderProduct,
  ProviderProductSchema,
} from './schemas/providers-products.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProviderProduct.name, schema: ProviderProductSchema },
    ]),
  ],
  controllers: [ProvidersProductsController],
  providers: [ProvidersProductsService],
  exports: [ProvidersProductsService],
})
export class ProvidersProductsModule {}
