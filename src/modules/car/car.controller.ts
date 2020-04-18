import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarController {

  constructor(
    private readonly carService: CarService,
  ) {
  }

  @Get()
  getCars() {
    return this.carService.find();
  }

  @Post()
  createCar(@Body() car: CreateCarDto) {
    return this.carService.create(car);
  }

  @Put(':id')
  updateCar(@Param('id') id: string, @Body() updateCarData: UpdateCarDto) {
    return this.carService.update(id, updateCarData);
  }
}
