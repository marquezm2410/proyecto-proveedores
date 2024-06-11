import { IsString, IsEmail, IsNotEmpty } from 'class-validator';
export class CreateProviderDto {

  @IsString()
  @IsNotEmpty()
  readonly providername: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly type: string;
}
