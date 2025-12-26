import  { useState } from 'react';

export default function RegistroCuenta({ clienteId }: { clienteId: number | null }) {
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [tipo, setTipo] = useState('');
  const [saldo, setSaldo] = useState(0);

  const guardarCuenta = async () => {
    if (!clienteId) {
      alert('Primero registra un cliente');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/cuentas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero_cuenta: numeroCuenta,
          tipo,
          saldo,
          activa: true,
          clienteId,
        }),
      });

      if (!res.ok) throw new Error('Error al registrar cuenta');

      const data = await res.json();
      alert(`Cuenta registrada con ID: ${data.id}`);
    } catch (err) {
      console.error('Error backend:', err);
      alert('Hubo un error al registrar la cuenta');
    }
  };

  return (
    <div>
      <h2>Registrar nueva cuenta</h2>
      <input
        placeholder="Número de cuenta"
        value={numeroCuenta}
        onChange={e => setNumeroCuenta(e.target.value)}
      />

      <label htmlFor="tipo">Tipo de cuenta:</label>
      <select
        id="tipo"
        value={tipo}
        onChange={e => setTipo(e.target.value)}
        required
      >
        <option value="">Seleccione...</option>
        <option value="Ahorros">Ahorros</option>
        <option value="Corriente">Corriente</option>
      </select>

      <input
        type="number"
        placeholder="Saldo"
        value={saldo}
        onChange={e => setSaldo(Number(e.target.value))}
      />

      <button onClick={guardarCuenta}>Guardar Cuenta</button>
    </div>
  );
}
