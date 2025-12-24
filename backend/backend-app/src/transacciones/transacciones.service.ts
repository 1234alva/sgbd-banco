import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from './transaccion.entity';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private transaccionesRepo: Repository<Transaccion>,
  ) {}

  findAll(): Promise<Transaccion[]> {
    return this.transaccionesRepo.find({ relations: ['cuenta'] });
  }

  findOne(id: number): Promise<Transaccion> {
    return this.transaccionesRepo.findOne({ where: { id }, relations: ['cuenta'] });
  }

  create(transaccion: Partial<Transaccion>): Promise<Transaccion> {
    const nueva = this.transaccionesRepo.create(transaccion);
    return this.transaccionesRepo.save(nueva);
  }

  async remove(id: number): Promise<void> {
    await this.transaccionesRepo.delete(id);
  }
}
