import { IsDate, IsMongoId, IsNumber, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCarDto {
  @IsMongoId()
  readonly manufacturer: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  readonly price: number;

  @Type(() => Date)
  @IsDate()
  readonly firstRegistrationDate: Date;
}
