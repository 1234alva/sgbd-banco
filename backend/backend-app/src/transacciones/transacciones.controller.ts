import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { Transaccion } from './transaccion.entity';
import { CreateTransaccionDto } from './create-transaccion.dto';

@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Get()
  findAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Transaccion | null> {
    return this.transaccionesService.findOne(id);
  }

  @Post()
  create(@Body() transaccion: CreateTransaccionDto): Promise<Transaccion> {
    return this.transaccionesService.create(transaccion);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.transaccionesService.remove(id);
  }
}

