import { Document } from 'mongoose';

export class Manufacturer {
  readonly _id?: string;
  readonly name: string;
  readonly phone: string;
  readonly siret: number;
}

export type ManufacturerDoc = Manufacturer & Document;
