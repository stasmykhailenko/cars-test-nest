import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { SharedModule } from '../shared/shared.module';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    SharedModule,
    ConfigModule,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
