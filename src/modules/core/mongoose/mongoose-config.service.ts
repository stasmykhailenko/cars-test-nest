import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

import { ConfigService } from '../../config/config.service';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(private config: ConfigService) {
  }

  createMongooseOptions(): MongooseModuleOptions {
    const uri = this.config.get('MONGODB_URI');

    return {
      uri,
      user: this.config.get('MONGODB_USER'),
      pass: this.config.get('MONGODB_PASS'),
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    };
  }
}
