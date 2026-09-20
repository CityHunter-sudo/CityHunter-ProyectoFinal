// Aquí traemos las piezas que ya armamos, cada una desde su archivo.
import Navbar from './modules/clientes/components/Navbar.jsx'
import Footer from './modules/clientes/components/Footer.jsx'
import SoporteTecnico from './modules/clientes/pages/SoporteTecnico.jsx'

// Este componente es el que arma la página completa, uniendo las piezas.
// Es el primero que se dibuja en pantalla (lo llama main.jsx).
function App() {
  return (
    <div className="app-shell">
      <Navbar />

      {/* <main> es la parte central de la página, donde va el contenido que cambia.
          Por ahora solo mostramos SoporteTecnico, pero si el día de mañana
          agregamos más pantallas, es aquí donde se decidiría cuál mostrar. */}
      <main className="app-content">
        <SoporteTecnico />
      </main>

      <Footer />
    </div>
  )
}

export default App