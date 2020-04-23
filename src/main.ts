import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import * as moment from 'moment-timezone';

import { AppModule } from './modules/app.module';
import { ConfigService } from './modules/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

  moment.tz.setDefault('UTC');

  const PORT = app.get(ConfigService).get('PORT', '3000');
  await app.listen(PORT);
}
bootstrap();
