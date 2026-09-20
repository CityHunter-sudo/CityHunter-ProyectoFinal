// Este archivo solo dibuja el pie de página que aparece al final de la pantalla.
// No guarda datos ni hace cálculos, simplemente muestra el mismo texto siempre.
export default function Footer() {
  return (
    // <footer> es la etiqueta de HTML pensada justo para esto: el cierre de la página.
    <footer className="footer">
      <p>City Hunter — Módulo Clientes Particulares</p>

      {/* Este texto se ve más pequeño y gris, ese estilo está definido en index.css */}
      <p className="footer-note">Proyecto formativo SENA · Análisis y Desarrollo de Software</p>
    </footer>
  )
}