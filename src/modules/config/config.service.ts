import { Injectable } from '@nestjs/common';

import * as dotenv from 'dotenv';

import * as fs from 'fs';

export interface EnvConfig {
  [key: string]: string;
}

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(filePath: string) {
    this.envConfig = fs.existsSync(filePath) ?
      dotenv.parse(fs.readFileSync(filePath)) :
      {};
  }

  get(key: string, defaultValue?: string): string {
    return this.envConfig[key] || process.env[key] || defaultValue;
  }
}
