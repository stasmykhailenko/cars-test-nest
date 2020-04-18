import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CarDoc } from './models/car.model';
import { CreateCarDto } from './dto/create-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectModel('Car')
    private readonly carModel: Model<CarDoc>,
  ) {
  }

  create(car: CreateCarDto) {
    return this.carModel.create(car);
  }
}
