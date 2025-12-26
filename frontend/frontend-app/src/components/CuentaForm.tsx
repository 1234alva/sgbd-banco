import { useState } from 'react';

export default function CuentaForm() {
  const [formData, setFormData] = useState({
    numero_cuenta: '',
    tipo: '',
    saldo: 0,
    activa: true,
    clienteId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'number' ? Number(value) : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.clienteId || isNaN(Number(formData.clienteId))) {
      alert('Por favor ingresa un ID de cliente válido');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/cuentas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          numero_cuenta: formData.numero_cuenta,
          tipo: formData.tipo,
          saldo: formData.saldo,
          activa: formData.activa,
          clienteId: Number(formData.clienteId)
        }),
      });

      if (!res.ok) throw new Error('Error al registrar cuenta');

      const data = await res.json();
      alert(`Cuenta registrada con éxito. ID asignado: ${data.id}`);

      setFormData({ numero_cuenta: '', tipo: '', saldo: 0, activa: true, clienteId: '' });
    } catch (error) {
      console.error('Error al crear cuenta:', error);
      alert('Hubo un error al registrar la cuenta');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Número de cuenta:</label>
        <input
          type="text"
          name="numero_cuenta"
          value={formData.numero_cuenta}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tipo de cuenta:</label>
        <select
          name="tipo"
          value={formData.tipo}
          onChange={e => setFormData({ ...formData, tipo: e.target.value })}
          required
        >
          <option value="">Seleccione...</option>
          <option value="Ahorros">Ahorros</option>
          <option value="Corriente">Corriente</option>
        </select>
      </div>
      <div>
        <label>Saldo:</label>
        <input
          type="number"
          name="saldo"
          value={formData.saldo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ID de Cliente:</label>
        <input
          type="text"
          name="clienteId"
          value={formData.clienteId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Activa:</label>
        <input
          type="checkbox"
          name="activa"
          checked={formData.activa}
          onChange={e => setFormData({ ...formData, activa: e.target.checked })}
        />
      </div>
      <button type="submit">Guardar Cuenta</button>
    </form>
  );
}
