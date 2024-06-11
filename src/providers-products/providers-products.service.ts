import { Injectable } from '@nestjs/common';
import { CreateProviderProductDto } from './dto/create-provider-product.dto';
import { UpdateProviderProductDto } from './dto/update-provider-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ProviderProduct } from './schemas/providers-products.schema';

@Injectable()
export class ProvidersProductsService {
  constructor(
    @InjectModel(ProviderProduct.name)
    private readonly providerProductModel: Model<ProviderProduct>,
  ) {}

  async create(createProviderProductDto: CreateProviderProductDto) {
    const createProvider = new this.providerProductModel({
      provider: createProviderProductDto.providerId,
      product: createProviderProductDto.productId,
    });

    return createProvider.save();
  }

  async findAll(): Promise<ProviderProduct[]> {
    const providersProducts = await this.providerProductModel
      .find()
      .exec();
    return providersProducts;
  }

  async findOne(id: string): Promise<ProviderProduct | null> {
    const providerProduct = await this.providerProductModel.findById(id).exec();
    return providerProduct ? providerProduct.toObject() : null;
  }

  async update(
    id: string,
    updateProviderDto: UpdateProviderProductDto,
  ): Promise<ProviderProduct | null> {
    const updatedProvider = await this.providerProductModel
      .findByIdAndUpdate(id, updateProviderDto, { new: true })
      .exec();

    return updatedProvider ? updatedProvider.toObject() : null;
  }

  async remove(id: string): Promise<void> {
    await this.providerProductModel.findByIdAndDelete(id).exec();
  }
}
