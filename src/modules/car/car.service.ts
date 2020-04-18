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

  update(id: string, updateCarData: UpdateCarDto) {
    return this.carModel.findOneAndUpdate({
      _id: id,
    }, updateCarData, {
      new: true,
    });
  }
}
