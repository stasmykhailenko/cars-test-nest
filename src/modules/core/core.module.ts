import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { SharedModule } from '../shared/shared.module';
import { ConfigModule } from '../config/config.module';

import { MongooseConfigService } from './mongoose/mongoose-config.service';
import { TasksService } from './services/tasks.service';

@Module({
  imports: [
    SharedModule,
    ConfigModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useClass: MongooseConfigService,
    }),
    ScheduleModule.forRoot(),
  ],
  providers: [
    TasksService,
  ],
  exports: [
    TasksService,
  ],
})
export class CoreModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
  }
}
