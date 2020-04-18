import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { OwnerDoc } from './models/owner.model';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(' Owner')
    private readonly ownerModel: Model<OwnerDoc>,
  ) {
  }
}
