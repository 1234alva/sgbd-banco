import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Cuenta } from '../cuentas/cuenta.entity';

@Entity('transacciones')
export class Transaccion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cuenta, cuenta => cuenta.transacciones, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cuenta_id' }) 
  cuenta: Cuenta;

  @Column()
  tipo: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  monto: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  fecha: Date;

  @Column({ nullable: true })
  descripcion: string;
}
