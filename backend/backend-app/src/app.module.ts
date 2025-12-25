import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './clientes/cliente.entity';
import { Cuenta } from './cuentas/cuenta.entity';
import { Transaccion } from './transacciones/transaccion.entity';
import { ClientesModule } from './clientes/clientes.module';
import { CuentasModule } from './cuentas/cuentas.module';
import { TransaccionesModule } from './transacciones/transacciones.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'banco_digital',
      entities: [Cliente, Cuenta, Transaccion],
      synchronize: false, 
    }),
    ClientesModule,
    CuentasModule,
    TransaccionesModule,
  ],
})
export class AppModule {}
