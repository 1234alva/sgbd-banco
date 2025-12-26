import { useState } from 'react';
import { createCliente } from '../services/clientesService';

export default function ClienteForm() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: ''
  });

  const [clienteId, setClienteId] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const nuevoCliente = await createCliente(formData);
      console.log('Respuesta del backend:', nuevoCliente);
      setClienteId(nuevoCliente.id);
      setFormData({ nombre: '', apellido: '', email: '' });
    } catch (error) {
      console.error('Error al crear cliente:', error);
      alert('Hubo un error al registrar el cliente');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Registrar nuevo cliente</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
          <input
            type="text"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            placeholder="Apellido"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <button type="submit">Guardar</button>

          {/* Campo ID generado  */}
          <input
            type="text"
            value={clienteId !== null ? clienteId : 'ID no generado'}
            readOnly
            style={{
              backgroundColor: '#ffeeba',
              border: '2px solid #ffc107',
              fontWeight: 'bold',
              padding: '5px',
              width: '150px'
            }}
          />
        </div>
      </form>
    </div>
  );
}
