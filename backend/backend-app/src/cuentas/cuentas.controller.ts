import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CuentasService } from './cuentas.service';
import { CreateCuentaDto } from './create-cuenta.dto';
import { Cuenta } from './cuenta.entity';

@Controller('cuentas')
export class CuentasController {
  constructor(private readonly cuentasService: CuentasService) {}

  @Get()
  async findAll(): Promise<Cuenta[]> {
    return this.cuentasService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Cuenta> {
    return this.cuentasService.findOne(id);
  }

  @Post()
  async create(@Body() dto: CreateCuentaDto): Promise<Cuenta> {
    return this.cuentasService.create(dto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: Partial<CreateCuentaDto>,
  ): Promise<Cuenta> {
    return this.cuentasService.update(id, dto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.cuentasService.remove(id);
  }
}
