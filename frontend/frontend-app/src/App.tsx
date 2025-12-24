import './App.css'
import ClienteForm from './components/ClienteForm'
import ClientesList from './components/ClientesList'
import CuentaForm from './components/CuentaForm'
import CuentasList from './components/CuentasList'
import TransaccionForm from './components/TransaccionForm'
import TransaccionesList from './components/TransaccionesList'

function App() {
  return (
    <div className="App">
      <h1>Banco Digital</h1>

      <section>
        <h2>Registrar nuevo cliente</h2>
        <ClienteForm />
      </section>

      <section>
        <h2>Registrar nueva cuenta</h2>
        <CuentaForm />
      </section>

      <section>
        <h2>Registrar nueva transacción</h2>
        <TransaccionForm />
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
