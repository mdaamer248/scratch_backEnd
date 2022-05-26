import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  userAddress: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  transactionHash: string;

  @ApiProperty()
  @IsNotEmpty()
  transactionTime: Date;
}
