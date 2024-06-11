import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Provider extends Document {
  @Prop({required: true })
  providername: string;

  @Prop({required: true, unique: true}) 
  email: string;

  @Prop({required: true })
  type: string;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
