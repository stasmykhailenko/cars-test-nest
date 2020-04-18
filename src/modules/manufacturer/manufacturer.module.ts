import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '../shared/shared.module';

import { ManufacturerService } from './manufacturer.service';
import { ManufacturerSchema } from './schemas/manufacturer.schema';

@Module({
  imports: [
    forwardRef(() => SharedModule),
    MongooseModule.forFeature([
      { name: 'Manufacturer', schema: ManufacturerSchema },
    ]),
  ],
  providers: [ManufacturerService],
  exports: [ManufacturerService],
})
export class ManufacturerModule {
}
