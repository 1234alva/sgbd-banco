import { Body, Controller, Get, Post, Delete, Put, Param } from '@nestjs/common';
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
  findOne(@Param('id') id: number): Promise<Cuenta> {
    return this.cuentasService.findOne(id);
  }

  @Post()
  create(@Body() cuenta: CreateCuentaDto): Promise<Cuenta> {
    return this.cuentasService.create(cuenta);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() cuenta: Partial<CreateCuentaDto>,
  ): Promise<Cuenta> {
    return this.cuentasService.update(id, cuenta);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.cuentasService.remove(id);
  }
}


