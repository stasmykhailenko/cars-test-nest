import * as mongoose from 'mongoose';

export const ManufacturerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    phone: {
      type: String,
      trim: true,
      required: true,
    },
    siret: {
      type: Number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
