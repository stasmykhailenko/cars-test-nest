import { Global, Module } from '@nestjs/common';

import { ManufacturerModule } from '../manufacturer/manufacturer.module';
import { OwnerModule } from '../owner/owner.module';
import { CarModule } from '../car/car.module';

const modules = [
  ManufacturerModule,
  OwnerModule,
  CarModule,
];

const services = [
];

@Global()
@Module({
  imports: [...modules],
  providers: [ ...services],
  exports: [...modules, ...services],
})
export class SharedModule {
}
