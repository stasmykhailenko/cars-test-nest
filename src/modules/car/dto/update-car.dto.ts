import { IsDate, IsMongoId, IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class UpdateCarDto {
  @IsMongoId()
  @IsOptional()
  readonly manufacturer: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @IsOptional()
  readonly price: number;

  @Type(() => Date)
  @IsDate()
  @IsOptional()
  readonly firstRegistrationDate: Date;
}
