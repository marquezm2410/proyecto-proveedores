import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvidersModule } from './providers/providers.module';
import { ProductsModule } from './products/products.module';
import { ProvidersProductsModule } from './providers-products/providers-products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://localhost/proyecto-proveedores'),
    UsersModule,
    AuthModule,
    ProvidersModule,
    ProductsModule,
    ProvidersProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
