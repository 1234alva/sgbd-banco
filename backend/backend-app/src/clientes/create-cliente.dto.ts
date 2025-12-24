import { IsString, IsEmail, IsOptional, IsBoolean } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateClienteDto {
  @ApiProperty({ example: 'Juan' })
  @IsString()
  nombre: string;

  @ApiProperty({ example: 'Pérez' })
  @IsString()
  apellido: string;

  @ApiProperty({ example: 'juan.perez@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '789456123', required: false })
  @IsOptional()
  @IsString()
  telefono?: string;

  @ApiProperty({ example: 'Av. Libertad 123', required: false })
  @IsOptional()
  @IsString()
  direccion?: string;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  activo?: boolean;
}
