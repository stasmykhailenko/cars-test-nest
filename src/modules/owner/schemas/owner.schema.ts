import * as mongoose from 'mongoose';

export const OwnerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    purchaseDate: {
      type: Date,
      trim: true,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
