import { useState } from 'react';
import { createTransaccion } from '../services/transaccionesService';

export default function TransaccionForm() {
  const [formData, setFormData] = useState({
    fecha: '',
    tipo: '',
    monto: '',
    cuentaId: ''
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
      const nuevaTransaccion = await createTransaccion(formData);
      console.log('Transacción creada:', nuevaTransaccion);
      alert('Transacción registrada con éxito');
      setFormData({ fecha: '', tipo: '', monto: '', cuentaId: '' });
    } catch (error) {
      console.error('Error al crear transacción:', error);
      alert('Hubo un error al registrar la transacción');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Fecha:</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
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
          placeholder="Depósito / Retiro"
          required
        />
      </div>
      <div>
        <label>Monto:</label>
        <input
          type="number"
          name="monto"
          value={formData.monto}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>ID de Cuenta:</label>
        <input
          type="text"
          name="cuentaId"
          value={formData.cuentaId}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Registrar Transacción</button>
    </form>
  );
}
