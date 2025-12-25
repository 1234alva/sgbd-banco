import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';
import { Transaccion } from '../transacciones/transaccion.entity';

@Entity('cuentas')
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.cuentas, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'cliente_id' })  
  cliente: Cliente;

  @Column({ unique: true })
  numero_cuenta: string;

  @Column()
  tipo: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0 })
  saldo: number;

  @Column({ default: true })
  activa: boolean;

  @OneToMany(() => Transaccion, (transaccion) => transaccion.cuenta)
  transacciones: Transaccion[];
}
