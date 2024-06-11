import { Injectable } from '@nestjs/common';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Provider } from './schemas/provider.schema';
import { EmailAlreadyExistsException } from '../common/exceptions/email-already-exists';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectModel(Provider.name) private readonly providerModel: Model<Provider>,
  ) {}

  async create(createProviderDto: CreateProviderDto) {
    const existingProvider = await this.providerModel
      .findOne({ email: createProviderDto.email })
      .exec();

    if (existingProvider) {
      throw new EmailAlreadyExistsException();
    }

    const createProvider = new this.providerModel(createProviderDto);

    return createProvider.save();
  }

  async findAll(): Promise<Provider[]> {
    const providers = await this.providerModel.find().exec();
    return providers;
  }

  async findOne(id: string): Promise<Provider | null> {
    const provider = await this.providerModel.findById(id).exec();
    return provider ? provider.toObject() : null;
  }

  async update(
    id: string,
    updateProviderDto: UpdateProviderDto,
  ): Promise<Provider | null> {
    const updatedProvider = await this.providerModel
      .findByIdAndUpdate(id, updateProviderDto, { new: true })
      .exec();

    return updatedProvider ? updatedProvider.toObject() : null;
  }

  async remove(id: string): Promise<void> {
    await this.providerModel.findByIdAndDelete(id).exec();
  }
}
