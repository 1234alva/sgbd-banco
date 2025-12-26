import './App.css'
import { useState } from 'react'
import ClienteForm from './components/ClienteForm'
import ClientesList from './components/ClientesList'
import CuentaForm from './components/CuentaForm'
import CuentasList from './components/CuentasList'
import TransaccionForm from './components/TransaccionForm'
import TransaccionesList from './components/TransaccionesList'

function App() {
  const [clienteId, setClienteId] = useState<number | null>(null)
  const [cuentaId, setCuentaId] = useState<number | null>(null)

  return (
    <div className="App">
      <h1>Banco Digital</h1>

      <section>
        <h2>Registrar nuevo cliente</h2>
        {/* Guardamos el ID del cliente */}
        <ClienteForm onClienteRegistrado={setClienteId} />
      </section>

      <section>
        <h2>Registrar nueva cuenta</h2>
        {/* Pasamos el clienteId y guardamos el ID de la cuenta */}
        <CuentaForm clienteId={clienteId} onCuentaRegistrada={setCuentaId} />
      </section>

      <section>
        <h2>Registrar nueva transacción</h2>
        {/* Pasamos el cuentaId para asociar la transacción */}
        <TransaccionForm cuentaId={cuentaId} />
      </section>

      <section>
        <ClientesList />
      </section>

      <section>
        <CuentasList />
      </section>

      <section>
        <TransaccionesList />
      </section>
    </div>
  )
}

export default App
