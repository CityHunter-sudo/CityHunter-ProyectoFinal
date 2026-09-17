# City Hunter — Módulo Clientes Particulares: Soporte Técnico (Frontend React)

Interfaz de usuario de la Historia de Usuario **HU2 – Soporte técnico**, dentro del módulo Clientes Particulares de City Hunter. Construida en React JS. Los datos son simulados (mock), ya que aún no hay backend conectado.

## Historia de usuario cubierta

**HU2 – Mantenimiento y soporte técnico**
> Como cliente, quiero solicitar soporte técnico especializado desde la plataforma, de modo que pueda reparar mi equipo sin complicaciones.

Criterios de aceptación:
- El cliente puede describir el problema y adjuntar fotos.
- El sistema asigna automáticamente un número de ticket.
- El equipo responde en menos de 24 horas hábiles (mensaje mostrado en la confirmación).

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Estructura

```
src/
  modules/
    clientes/
      components/   -> Navbar, Footer
      pages/          -> SoporteTecnico.jsx
  App.jsx             -> ensambla Navbar + SoporteTecnico + Footer
  main.jsx            -> punto de entrada
  index.css           -> estilos globales
```

## Próximos pasos

- Conectar el envío del formulario a un endpoint real (backend) que cree el ticket.
- Subir las fotos adjuntas a almacenamiento real (hoy solo se listan los nombres de archivo).
- Agregar validación de tiempos de respuesta reales para el criterio de "24 horas hábiles".
