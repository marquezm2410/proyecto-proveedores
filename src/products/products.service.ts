import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { EmailAlreadyExistsException } from '../common/exceptions/email-already-exists';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async create(createProductDto: CreateProductDto) {
    const existingProduct = await this.productModel
      .findOne({ email: createProductDto.email })
      .exec();

    if (existingProduct) {
      throw new EmailAlreadyExistsException();
    }

    const createProduct = new this.productModel(createProductDto);

    return createProduct.save();
  }

  async findAll(): Promise<Product[]> {
    const Products = await this.productModel.find().exec();
    return Products;
  }

  async findOne(id: string): Promise<Product | null> {
    const product = await this.productModel.findById(id).exec();
    return product ? product.toObject() : null;
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec();

    return updatedProduct ? updatedProduct.toObject() : null;
  }

  async remove(id: string): Promise<void> {
    await this.productModel.findByIdAndDelete(id).exec();
  }
}
