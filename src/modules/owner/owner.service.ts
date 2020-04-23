import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import * as moment from 'moment';

import { Model } from 'mongoose';

import { CarService } from '../car/car.service';

import { OwnerDoc } from './models/owner.model';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel('Owner')
    private readonly ownerModel: Model<OwnerDoc>,
    private readonly carService: CarService,
  ) {
  }

  async removeOwners() {
    const searchDate = moment().subtract(18, 'months').toDate();

    const owners = await this.ownerModel.find({
      purchaseDate: {
        $lt: searchDate,
      },
    });

    const ids = owners.map(owner => owner._id);

    return this.carService.deleteOwners(ids);
  }
}
