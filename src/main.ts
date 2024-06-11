import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000, () => {
    console.log(
      `Server ready on port ${app.get<ConfigService>(ConfigService).get<Number>('PORT') || 3000}`,
    );
  });
}
bootstrap();
