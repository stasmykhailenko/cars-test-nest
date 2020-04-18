import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '../shared/shared.module';

import { OwnerService } from './owner.service';
import { OwnerSchema } from './schemas/owner.schema';

@Module({
  imports: [
    forwardRef(() => SharedModule),
    MongooseModule.forFeature([
      { name: 'Owner', schema: OwnerSchema },
    ]),
  ],
  providers: [OwnerService],
  exports: [OwnerService],
})
export class OwnerModule {
}
