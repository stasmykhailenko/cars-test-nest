import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

import * as moment from 'moment-timezone';

import { AppModule } from './modules/app.module';
import { RpcExceptionFilter } from './modules/core/filters/rpc-exception-filter';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  app.useGlobalFilters(new RpcExceptionFilter());

  moment.tz.setDefault('UTC');

  await app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
