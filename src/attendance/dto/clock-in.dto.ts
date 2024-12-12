import { IsString, IsOptional, IsNumber } from 'class-validator';

export class ClockInDto {
  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longitude?: number;

  @IsString()
  @IsOptional()
  ipAddress?: string;

  @IsString()
  @IsOptional()
  deviceInfo?: string;
}
