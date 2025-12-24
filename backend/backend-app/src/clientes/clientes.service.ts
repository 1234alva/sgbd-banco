import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(Cliente)
    private clientesRepo: Repository<Cliente>,
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.clientesRepo.find();
  }

  findOne(id: number): Promise<Cliente> {
    return this.clientesRepo.findOneBy({ id });
  }

  create(cliente: Partial<Cliente>): Promise<Cliente> {
    const nuevo = this.clientesRepo.create(cliente);
    return this.clientesRepo.save(nuevo);
  }

  async remove(id: number): Promise<void> {
    await this.clientesRepo.delete(id);
  }
}
