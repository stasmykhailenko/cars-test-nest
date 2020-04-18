import { Global, Module } from '@nestjs/common';

import { ManufacturerModule } from '../manufacturer/manufacturer.module';

const modules = [
  ManufacturerModule,
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
