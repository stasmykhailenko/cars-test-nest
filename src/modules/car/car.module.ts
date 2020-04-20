import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '../shared/shared.module';

import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './schemas/car.schema';

@Module({
  imports: [
    forwardRef(() => SharedModule),
    MongooseModule.forFeature([
      { name: 'Car', schema: CarSchema },
    ]),
  ],
  controllers: [CarController],
  providers: [CarService],
  exports: [CarService],
})
export class CarModule {}
