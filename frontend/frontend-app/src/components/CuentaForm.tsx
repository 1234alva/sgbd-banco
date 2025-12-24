import { useState } from 'react';
import { createCuenta } from '../services/cuentasService';

export default function CuentaForm() {
  const [formData, setFormData] = useState({
    numeroCuenta: '',
    tipo: '',
    saldo: '',
    clienteId: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nuevaCuenta = await createCuenta(formData);
      console.log('Cuenta creada:', nuevaCuenta);
      alert('Cuenta registrada con éxito');
      setFormData({ numeroCuenta: '', tipo: '', saldo: '', clienteId: '' });
    } catch (error) {
      console.error('Error al crear cuenta:', error);
      alert('Hubo un error al registrar la cuenta');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Número de Cuenta:</label>
        <input
          type="text"
          name="numeroCuenta"
          value={formData.numeroCuenta}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Tipo:</label>
        <input
          type="text"
          name="tipo"
          value={formData.tipo}
          onChange={handleChange}
          placeholder="Ahorros / Corriente"
          required
        />
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
        <label>ID Cliente:</label>
        <input
          type="text"
          name="clienteId"
          value={formData.clienteId}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Registrar Cuenta</button>
    </form>
  );
}
