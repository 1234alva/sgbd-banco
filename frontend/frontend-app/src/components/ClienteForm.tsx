import { useState } from 'react';
import { createCliente } from '../services/clientesService';

export default function ClienteForm() {
  const [cliente, setCliente] = useState({ nombre: '', apellido: '', email: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nuevo = await createCliente(cliente);
    console.log('Cliente creado:', nuevo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="nombre" placeholder="Nombre" onChange={handleChange} />
      <input name="apellido" placeholder="Apellido" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <button type="submit">Guardar</button>
    </form>
  );
}
