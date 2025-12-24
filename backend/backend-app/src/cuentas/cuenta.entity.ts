import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Cliente } from '../clientes/cliente.entity';

@Entity('cuentas')
export class Cuenta {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Cliente, (cliente) => cliente.id, { onDelete: 'CASCADE' })
  cliente: Cliente;

  @Column({ unique: true })
  numero_cuenta: string;

  @Column()
  tipo: string; // Ahorros, Corriente, etc.

  @Column({ type: 'numeric', precision: 12, scale: 2, default: 0 })
  saldo: number;

  @Column({ default: true })
  activa: boolean;
}
