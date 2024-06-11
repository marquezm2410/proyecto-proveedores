import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({required: true })
  productname: string;

  @Prop({required: true, unique: true}) 
  email: string;

  @Prop({required: true })
  type: string;
}

export const Productschema = SchemaFactory.createForClass(Product);
