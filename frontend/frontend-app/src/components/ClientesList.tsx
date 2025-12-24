import { useEffect, useState } from 'react';
import { getClientes } from '../services/clientesService';

export default function ClientesList() {
  const [clientes, setClientes] = useState<any[]>([]);

  useEffect(() => {
    getClientes().then((data) => setClientes(data));
  }, []);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <ul>
        {clientes.map((c) => (
          <li key={c.id}>
            {c.nombre} {c.apellido} - {c.email}
          </li>
        ))}
      </ul>
    </div>
  );
}