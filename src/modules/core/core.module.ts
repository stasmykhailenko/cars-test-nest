import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { SharedModule } from '../shared/shared.module';
import { ConfigModule } from '../config/config.module';

import { MongooseConfigService } from './mongoose/mongoose-config.service';

@Module({
  imports: [
    SharedModule,
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
