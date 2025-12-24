import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cuenta } from '../cuentas/cuenta.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cuenta, (cuenta) => cuenta.id, { onDelete: 'CASCADE' })
  cuenta: Cuenta;

  @Column()
  tipo: string; // Deposito, Retiro, Transferencia

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  monto: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ nullable: true })
  descripcion: string;
}
