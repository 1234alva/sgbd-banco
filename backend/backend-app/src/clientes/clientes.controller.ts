import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './create-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Cliente | null> {
    return this.clientesService.findOne(id);
  }

  @Post()
  create(@Body() cliente: CreateClienteDto): Promise<Cliente> {
    return this.clientesService.create(cliente);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.clientesService.remove(id);
  }
}
