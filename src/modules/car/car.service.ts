import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model, Types } from 'mongoose';
import * as moment from 'moment';

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
    return this.carModel.find({})
      .populate('owners')
      .populate('manufacturer');
  }

  findById(id: string) {
    return this.carModel.findById(id)
      .populate('owners')
      .populate('manufacturer');
  }

  async create(car: CreateCarDto) {
    const createdCar = await this.carModel.create(car);
    return createdCar
      .populate('owners')
      .populate('manufacturer')
      .execPopulate();
  }

  findOneAndUpdate(
    conditions: { [key: string]: any },
    updateCarData: UpdateCarDto,
    returnNew: boolean = true,
  ) {
    return this.carModel.findOneAndUpdate(conditions, updateCarData, {
      new: returnNew,
    })
      .populate('owners')
      .populate('manufacturer');
  }

  deleteOne(conditions: { [key: string]: any }) {
    return this.carModel.deleteOne(conditions);
  }

  async getManufacturerByCarId(id: string) {
    const [res] = await this.carModel.aggregate([
      {
        $match: {
          _id: Types.ObjectId(id),
        },
      },
      {
        $lookup: {
          from: 'manufacturers',
          localField: 'manufacturer',
          foreignField: '_id',
          as: 'manufacturer',
        },
      },
      {
        $unwind: '$manufacturer',
      },
    ]);

    if (!res || !res.manufacturer) {
      throw new NotFoundException('Manufacturer not found');
    }

    return res && res.manufacturer;
  }

  async deleteOwners(ids: string[]) {
    return this.carModel.updateMany(
      {
        owners: {
          $in: ids,
        },
      },
      {
        $pullAll: {
          owners: ids,
        },
      },
    );
  }

  addDiscountToCars() {
    const fromSearchDate = moment().subtract(18, 'months').toDate();
    const toSearchDate = moment().subtract(12, 'months').toDate();

    return this.carModel.updateMany({
      firstRegistrationDate: {
        $gte: fromSearchDate,
        $lte: toSearchDate,
      },
    }, {
      $inc: {
        discount: 0.2,
      },
    });
  }

  deleteDiscountFromCars() {
    const searchDate = moment().subtract(18, 'months').toDate();

    return this.carModel.updateMany({
      firstRegistrationDate: {
        $lt: searchDate,
      },
    }, {
      $inc: {
        discount: -0.2,
      },
    });
  }
}
