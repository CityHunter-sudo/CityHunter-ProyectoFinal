import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' // aquí se cargan todos los estilos, por eso funcionan en toda la app sin importarlos en cada archivo

// Este es el primer archivo que se ejecuta (lo llama el index.html).
// Busca el <div id="root"> que está vacío en el HTML, y ahí "monta" (dibuja) el componente App,
// que es el que arma toda la interfaz.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* StrictMode no se ve en pantalla, solo ayuda a detectar errores
        comunes mientras programas. En producción no afecta nada. */}
    <App />
  </React.StrictMode>,
)