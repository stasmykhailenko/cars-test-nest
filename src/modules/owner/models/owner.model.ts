import { Document } from 'mongoose';

export class Owner {
  readonly _id?: string;
  readonly name: string;
  readonly purchaseDate: Date;
}

export type OwnerDoc = Owner & Document;
