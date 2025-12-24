import { useEffect, useState } from 'react';
import { getTransacciones } from '../services/transaccionesService';

export default function TransaccionesList() {
  const [transacciones, setTransacciones] = useState<any[]>([]);

  useEffect(() => {
    getTransacciones().then((data) => setTransacciones(data));
  }, []);

  return (
    <div>
      <h2>Lista de Transacciones</h2>
      <ul>
        {transacciones.map((t) => (
          <li key={t.id}>
            {t.fecha} - {t.tipo} - Monto: {t.monto} - Cuenta: {t.cuentaId}
          </li>
        ))}
      </ul>
    </div>
  );
}
