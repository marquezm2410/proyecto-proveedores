import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateProviderProductDto {
  @IsString()
  @IsNotEmpty()
  readonly providerId: string;

  @IsString()
  @IsNotEmpty()
  readonly productId: string;
}
