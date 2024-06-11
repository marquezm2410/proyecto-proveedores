import { Module } from '@nestjs/common';
import { ProductsService } from './Products.service';
import { ProductsController } from './Products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, Productschema } from './schemas/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Product.name, schema: Productschema}])
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService] 
})
export class ProductsModule {}
