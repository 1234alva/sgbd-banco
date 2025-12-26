import React, { useState } from 'react';

export default function RegistroCliente({ onClienteRegistrado }: { onClienteRegistrado: (id: number) => void }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');

  const guardarCliente = async () => {
    try {
      const res = await fetch('http://localhost:3000/clientes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, apellido, email }),
      });

      if (!res.ok) throw new Error('Error al registrar cliente');

      const data = await res.json();
      onClienteRegistrado(data.id);
      alert(`Cliente registrado con ID: ${data.id}`);
    } catch {
      alert('Hubo un error al registrar el cliente');
    }
  };

  return (
    <div>
      <h2>Registrar nuevo cliente</h2>
      <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
      <input placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={guardarCliente}>Guardar Cliente</button>
    </div>
  );
}
