import { Body, Controller, Post } from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {

  constructor(
    private readonly carService: CarService,
  ) {
  }

  @Post()
  createCar(@Body() car: CreateCarDto) {
    return this.carService.create(car);
  }
}
