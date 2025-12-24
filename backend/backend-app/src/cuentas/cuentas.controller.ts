import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { Cuenta } from './cuenta.entity';
import { CreateCuentaDto } from './create-cuenta.dto';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Get()
  findAll(): Promise<Cuenta[]> {
    return this.cuentasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cuenta | null> {
    return this.cuentasService.findOne(id);
  }

  @Post()
  create(@Body() cuenta: CreateCuentaDto): Promise<Cuenta> {
    return this.cuentasService.create(cuenta);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cuentasService.remove(id);
  }
}

