import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';
import { CreateClienteDto } from './create-cliente.dto';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepository: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cliente[]> {
    return this.clientesRepository.find({
      where: { activo: true },
      relations: ['cuentas'], 
    });
  }

  async findOne(id: number): Promise<Cliente | null> {
    return this.clientesRepository.findOne({
      where: { id, activo: true },
      relations: ['cuentas'],
    });
  }

  async create(dto: CreateClienteDto): Promise<Cliente> {
    const cliente = this.clientesRepository.create(dto);
    return this.clientesRepository.save(cliente);
  }

  async update(id: number, dto: Partial<CreateClienteDto>): Promise<Cliente> {
    await this.clientesRepository.update(id, dto);
    const cliente = await this.findOne(id);
    if (!cliente) {
      throw new Error(`Cliente con id ${id} no encontrado`);
    }
    return cliente;
  }

  async remove(id: number): Promise<void> {
    
    await this.clientesRepository.update(id, { activo: false });
  }
}
