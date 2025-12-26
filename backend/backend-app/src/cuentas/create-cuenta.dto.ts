import { IsEnum, IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export enum TipoCuenta {
  AHORROS = 'Ahorros',
  CORRIENTE = 'Corriente',
}

export class CreateCuentaDto {
  @ApiProperty({ example: '1234567890' })
  @IsString()
  numero_cuenta: string;

  @ApiProperty({ enum: TipoCuenta })
  @IsEnum(TipoCuenta)
  tipo: TipoCuenta;

  @ApiProperty({ example: 1000.50 })
  @IsNumber()
  @Type(() => Number)
  saldo: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  activa?: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @Type(() => Number)
  clienteId: number;
}

