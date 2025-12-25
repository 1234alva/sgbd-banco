import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaccion } from './transaccion.entity';
import { CreateTransaccionDto } from './create-transaccion.dto';
import { Cuenta } from '../cuentas/cuenta.entity';

@Injectable()
export class TransaccionesService {
  constructor(
    @InjectRepository(Transaccion)
    private readonly transaccionesRepo: Repository<Transaccion>,
    @InjectRepository(Cuenta)
    private readonly cuentasRepo: Repository<Cuenta>,
  ) {}

  async findAll(): Promise<Transaccion[]> {
    return this.transaccionesRepo.find({ relations: ['cuenta'] });
  }

  async findOne(id: number): Promise<Transaccion> {
    const transaccion = await this.transaccionesRepo.findOne({
      where: { id },
      relations: ['cuenta'],
    });
    if (!transaccion) {
      throw new NotFoundException(`Transacción con id ${id} no encontrada`);
    }
    return transaccion;
  }

  async create(dto: CreateTransaccionDto): Promise<Transaccion> {
    
    const cuenta = await this.cuentasRepo.findOne({ where: { id: dto.cuentaId } });
    if (!cuenta) {
      throw new NotFoundException('Cuenta no encontrada');
    }

    
    if (dto.tipo === 'Deposito') {
      cuenta.saldo = Number(cuenta.saldo) + Number(dto.monto);
    } else if (dto.tipo === 'Retiro') {
      if (Number(cuenta.saldo) < Number(dto.monto)) {
        throw new BadRequestException('Saldo insuficiente para el retiro');
      }
      cuenta.saldo = Number(cuenta.saldo) - Number(dto.monto);
    }

    
    await this.cuentasRepo.save(cuenta);

    
    const transaccion = this.transaccionesRepo.create({
      ...dto,
      cuenta,
    });

    return this.transaccionesRepo.save(transaccion);
  }

  async update(id: number, dto: Partial<CreateTransaccionDto>): Promise<Transaccion> {
    await this.transaccionesRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.transaccionesRepo.delete(id);
  }
}
