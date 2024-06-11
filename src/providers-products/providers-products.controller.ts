import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProvidersProductsService } from './providers-products.service';
import { CreateProviderProductDto } from './dto/create-provider-product.dto';
import { UpdateProviderProductDto } from './dto/update-provider-product.dto';
import { ProviderProduct } from './schemas/providers-products.schema';

@Controller('providers-products')
export class ProvidersProductsController {
  constructor(
    private readonly providersProductsService: ProvidersProductsService,
  ) {}

  @Post()
  create(@Body() createProviderProductDto: CreateProviderProductDto) {
    return this.providersProductsService.create(createProviderProductDto);
  }

  @Get()
  async findAll(): Promise<ProviderProduct[]> {
    return await this.providersProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ProviderProduct | null> {
    return this.providersProductsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProviderProductDto: UpdateProviderProductDto,
  ): Promise<ProviderProduct | null> {
    return this.providersProductsService.update(id, updateProviderProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.providersProductsService.remove(id);
  }
}
