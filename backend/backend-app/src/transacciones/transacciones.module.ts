import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransaccionesController } from './transacciones.controller';
import { TransaccionesService } from './transacciones.service';
import { Transaccion } from './transaccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaccion])],
  controllers: [TransaccionesController],
  providers: [TransaccionesService],
})
export class TransaccionesModule {}
