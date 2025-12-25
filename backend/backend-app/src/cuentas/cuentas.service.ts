import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './cuenta.entity';
import { CreateCuentaDto } from './create-cuenta.dto';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentasRepo: Repository<Cuenta>,
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
      throw new Error(`Cuenta con id ${id} no encontrada`);
    }
    return cuenta;
  }

  async create(dto: CreateCuentaDto): Promise<Cuenta> {
    const cuenta = this.cuentasRepo.create(dto);
    return this.cuentasRepo.save(cuenta);
  }

  async update(id: number, dto: Partial<CreateCuentaDto>): Promise<Cuenta> {
    await this.cuentasRepo.update(id, dto);
    const cuenta = await this.findOne(id);
    return cuenta;
  }

  async remove(id: number): Promise<void> {
    await this.cuentasRepo.update(id, { activa: false }); // soft delete
  }
}

