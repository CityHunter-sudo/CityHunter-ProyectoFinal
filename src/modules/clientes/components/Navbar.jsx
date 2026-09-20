// Esta es la barra que aparece arriba de toda la pantalla.
// Igual que el Footer, solo muestra texto fijo, no tiene lógica ni datos que cambien.
export default function Navbar() {
  return (
    // <header> es la etiqueta de HTML para la parte superior de la página.
    <header className="navbar">
      <div className="navbar-brand">
        City Hunter {/* el <span> pinta esta parte en un gris más suave, para que resalte menos que "City Hunter" */}
        <span>· Clientes Particulares</span>
      </div>

      {/* Le avisa al usuario en qué parte del módulo está parado */}
      <p className="navbar-subtitle">Soporte Técnico Especializado</p>
    </header>
  )
}