import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCuentaDto {
  @ApiProperty({ example: '1234567890' })
  @IsString()
  numero_cuenta: string;

  @ApiProperty({ example: 'Ahorros' })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 1000.50 })
  @IsNumber()
  saldo: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  activa?: boolean;

  @ApiProperty({ example: 1 })
  @IsNumber()
  clienteId: number; 
}
