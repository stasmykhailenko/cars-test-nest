import { Global, Module } from '@nestjs/common';

const modules = [
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
