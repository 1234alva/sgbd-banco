import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './cuenta.entity';
import { CreateCuentaDto } from './create-cuenta.dto';
import { Cliente } from '../clientes/cliente.entity';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentasRepo: Repository<Cuenta>,
    @InjectRepository(Cliente)
    private clientesRepo: Repository<Cliente>,
  ) {}

  async findAll(): Promise<Cuenta[]> {
    return this.cuentasRepo.find({ relations: ['cliente'] });
  }

  async findOne(id: number): Promise<Cuenta> {
    const cuenta = await this.cuentasRepo.findOne({
      where: { id },
      relations: ['cliente'],
    });
    if (!cuenta) {
      throw new NotFoundException(`Cuenta con id ${id} no encontrada`);
    }
    return cuenta;
  }

  async create(dto: CreateCuentaDto): Promise<Cuenta> {
    const cliente = await this.clientesRepo.findOne({ where: { id: dto.clienteId } });
    if (!cliente) {
      throw new NotFoundException('Cliente no encontrado');
    }

    const cuenta = this.cuentasRepo.create({
      numero_cuenta: dto.numero_cuenta,
      tipo: dto.tipo,
      saldo: dto.saldo,
      activa: dto.activa ?? true,
      cliente,
    });

    return this.cuentasRepo.save(cuenta);
  }

  async update(id: number, dto: Partial<CreateCuentaDto>): Promise<Cuenta> {
    await this.cuentasRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.cuentasRepo.update(id, { activa: false });
  }
}
