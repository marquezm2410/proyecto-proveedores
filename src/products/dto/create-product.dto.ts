import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateProductDto {

  @IsString()
  @IsNotEmpty()
  readonly productname: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;
}
