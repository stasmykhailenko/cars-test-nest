import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CreateCarDto } from './dto/create-car.dto';
import { CarService } from './car.service';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller()
export class CarController {

  constructor(
    private readonly carService: CarService,
  ) {
  }

  @MessagePattern({ cmd: 'getCars' })
  getCars() {
    return this.carService.find();
  }

  @MessagePattern({ cmd: 'getCar' })
  getCar({ id, manufacturerOnly }: {
      id: string,
      manufacturerOnly: boolean,
  }) {
    if (manufacturerOnly) {
      return this.carService.getManufacturerByCarId(id);
    }
    return this.carService.findById(id);
  }

  @MessagePattern({ cmd: 'createCar' })
  createCar({ car }: { car: CreateCarDto }) {
    return this.carService.create(car);
  }

  @MessagePattern({ cmd: 'updateCar' })
  updateCar({ _id, updateCarData }: {
    _id: string,
    updateCarData: UpdateCarDto,
  }) {
    return this.carService.findOneAndUpdate({ _id }, updateCarData);
  }

  @MessagePattern({ cmd: 'deleteCar' })
  deleteCar(conditions: { _id: string }) {
    return this.carService.deleteOne(conditions);
  }
}
