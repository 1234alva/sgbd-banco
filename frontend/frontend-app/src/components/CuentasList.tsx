import { useEffect, useState } from 'react';
import { getCuentas } from '../services/cuentasService';

export default function CuentasList() {
  const [cuentas, setCuentas] = useState<any[]>([]);

  useEffect(() => {
    getCuentas().then((data) => setCuentas(data));
  }, []);

  return (
    <div>
      <h2>Lista de Cuentas</h2>
      <ul>
        {cuentas.map((c) => (
          <li key={c.id}>
            {c.numeroCuenta} - {c.tipo} - Saldo: {c.saldo}
          </li>
        ))}
      </ul>
    </div>
  );
}
