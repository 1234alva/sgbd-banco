import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTransaccionDto {
  @ApiProperty({ example: 'Deposito' })
  @IsString()
  tipo: string;

  @ApiProperty({ example: 250.75 })
  @IsNumber()
  monto: number;

  @ApiProperty({ example: 'Pago de servicios', required: false })
  @IsOptional()
  @IsString()
  descripcion?: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  cuentaId: number;
}
