import Navbar from './modules/clientes/components/Navbar.jsx'
import Footer from './modules/clientes/components/Footer.jsx'
import SoporteTecnico from './modules/clientes/pages/SoporteTecnico.jsx'

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-content">
        <SoporteTecnico />
      </main>
      <Footer />
    </div>
  )
}

export default App
