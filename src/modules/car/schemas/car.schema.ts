import * as mongoose from 'mongoose';

export const CarSchema = new mongoose.Schema(
  {
    manufacturer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Manufacturer',
      required: true,
    },
    price: {
      type: Number,
      min: 0,
      required: true,
    },
    firstRegistrationDate: {
      type: Date,
      required: true,
    },
    owners: {
      type: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Owner',
      }],
      default: [],
    },
    discount: {
      type: Number,
      min: 0,
      max: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);
