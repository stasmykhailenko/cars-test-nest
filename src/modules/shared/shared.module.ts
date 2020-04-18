import { Global, Module } from '@nestjs/common';

import { ManufacturerModule } from '../manufacturer/manufacturer.module';
import { OwnerModule } from '../owner/owner.module';

const modules = [
  ManufacturerModule,
  OwnerModule,
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
