import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { ManufacturerDoc } from './models/manufacturer.model';

@Injectable()
export class ManufacturerService {
  constructor(
    @InjectModel('Manufacturer')
    private readonly manufacturerModel: Model<ManufacturerDoc>,
  ) {
  }
}
