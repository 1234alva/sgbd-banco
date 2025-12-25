import { Body, Controller, Get, Post, Delete, Put, Param, ParseIntPipe } from '@nestjs/common';
import { TransaccionesService } from './transacciones.service';
import { Transaccion } from './transaccion.entity';
import { CreateTransaccionDto } from './create-transaccion.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('transacciones')
@Controller('transacciones')
export class TransaccionesController {
  constructor(private readonly transaccionesService: TransaccionesService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas las transacciones' })
  @ApiResponse({ status: 200, description: 'Lista de transacciones obtenida correctamente.' })
  async findAll(): Promise<Transaccion[]> {
    return this.transaccionesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una transacción por ID' })
  @ApiResponse({ status: 200, description: 'Transacción encontrada.' })
  @ApiResponse({ status: 404, description: 'Transacción no encontrada.' })
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Transaccion> {
    return this.transaccionesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Crear una nueva transacción (Depósito o Retiro)' })
  @ApiResponse({ status: 201, description: 'Transacción creada correctamente.' })
  @ApiResponse({ status: 400, description: 'Datos inválidos o saldo insuficiente.' })
  async create(@Body() transaccion: CreateTransaccionDto): Promise<Transaccion> {
    return this.transaccionesService.create(transaccion);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar una transacción existente' })
  @ApiResponse({ status: 200, description: 'Transacción actualizada correctamente.' })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() transaccion: Partial<CreateTransaccionDto>,
  ): Promise<Transaccion> {
    return this.transaccionesService.update(id, transaccion);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar una transacción' })
  @ApiResponse({ status: 200, description: 'Transacción eliminada correctamente.' })
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.transaccionesService.remove(id);
  }
}
