import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { OwnerService } from '../../owner/owner.service';
import { CarService } from '../../car/car.service';

@Injectable()
export class TasksService {

  constructor(
    private readonly ownerService: OwnerService,
    private readonly carService: CarService,
  ) {
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  removeOwners() {
    this.ownerService.removeOwners();
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  addDiscountToCars() {
    this.carService.addDiscountToCars();
  }

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  deleteDiscountFromCars() {
    this.carService.deleteDiscountFromCars();
  }
}
