import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuenta } from './cuenta.entity';

@Injectable()
export class CuentasService {
  constructor(
    @InjectRepository(Cuenta)
    private cuentasRepo: Repository<Cuenta>,
  ) {}

  findAll(): Promise<Cuenta[]> {
    return this.cuentasRepo.find({ relations: ['cliente'] });
  }

  findOne(id: number): Promise<Cuenta> {
    return this.cuentasRepo.findOne({ where: { id }, relations: ['cliente'] });
  }

  create(cuenta: Partial<Cuenta>): Promise<Cuenta> {
    const nueva = this.cuentasRepo.create(cuenta);
    return this.cuentasRepo.save(nueva);
  }

  async remove(id: number): Promise<void> {
    await this.cuentasRepo.delete(id);
  }
}
