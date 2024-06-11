import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Product } from 'src/products/schemas/product.schema';
import { Provider } from '../entities/provider-product.entity';

@Schema()
export class ProviderProduct extends Document {
  @Prop({ type: String, ref: 'Product', required: true })
  product: Product;

  @Prop({ type: String, ref: 'Provider', required: true })
  provider: Provider;

  @Prop({ default: Date.now })
  createAt: Date;
}

export const ProviderProductSchema =
  SchemaFactory.createForClass(ProviderProduct);

  