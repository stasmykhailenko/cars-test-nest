import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { CarDoc } from './models/car.model';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarService {
  constructor(
    @InjectModel('Car')
    private readonly carModel: Model<CarDoc>,
  ) {
  }

  find() {
    return this.carModel.find({});
  }

  create(car: CreateCarDto) {
    return this.carModel.create(car);
  }

  findOneAndUpdate(
    conditions: { [key: string]: any },
    updateCarData: UpdateCarDto,
    returnNew: boolean = true,
  ) {
    return this.carModel.findOneAndUpdate(conditions, updateCarData, {
      new: returnNew,
    });
  }

  deleteOne(conditions: { [key: string]: any }) {
    return this.carModel.deleteOne(conditions);
  }
}
