import { Document } from 'mongoose';

import { Manufacturer } from '../../manufacturer/models/manufacturer.model';
import { Owner } from '../../owner/models/owner.model';

export class Car {
  readonly _id?: string;
  readonly manufacturer: string | Manufacturer;
  readonly price: number;
  readonly firstRegistrationDate: Date;
  readonly owners: Array<string | Owner>;
}

export type CarDoc = Car & Document;
