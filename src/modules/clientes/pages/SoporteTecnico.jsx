import { useState } from 'react'

// Estos son los valores con los que arranca el formulario, todo vacío.
// Lo guardamos aparte porque lo vamos a reutilizar más abajo, cuando el
// usuario pida crear una nueva solicitud y haya que "limpiar" el formulario.
const initialForm = {
  equipo: '',
  tipoProblema: 'Hardware',
  descripcion: '',
  archivos: [],
}

export default function SoporteTecnico() {
  // "form" guarda lo que el usuario va escribiendo en el formulario.
  // Cada vez que cambia algo en pantalla, actualizamos esta variable con setForm.
  const [form, setForm] = useState(initialForm)

  // "ticket" empieza en null (osea, todavía no se ha enviado nada).
  // Cuando el usuario envía el formulario, aquí guardamos el ticket ya generado.
  // Que este valor exista o no es lo que decide qué se muestra en pantalla:
  // el formulario, o la confirmación.
  const [ticket, setTicket] = useState(null)

  // Se ejecuta cada vez que el usuario escribe en un input o cambia un select.
  // "e.target.name" es el atributo name de ese input (ej: "equipo"),
  // así que esta única función sirve para actualizar cualquier campo del formulario.
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  // Se ejecuta cuando el usuario selecciona archivos para adjuntar.
  // Por ahora solo guardamos los nombres de los archivos (no los subimos a
  // ningún lado, porque todavía no hay un servidor que los reciba).
  function handleArchivos(e) {
    const nombres = Array.from(e.target.files).map((file) => file.name)
    setForm({ ...form, archivos: nombres })
  }

  // Se ejecuta al enviar el formulario (botón "Enviar solicitud").
  function handleSubmit(e) {
    e.preventDefault() // evita que la página se recargue, que es lo que hace un formulario normal de HTML
    const numeroTicket = 'TCK-' + Math.floor(1000 + Math.random() * 9000) // número de ticket inventado, tipo TCK-4821
    setTicket({ numero: numeroTicket, ...form }) // guardamos el ticket con los datos que el usuario llenó
  }

  // Se ejecuta cuando el usuario, ya viendo su ticket, quiere hacer otra solicitud.
  function handleNuevaSolicitud() {
    setForm(initialForm) // el formulario vuelve a quedar vacío
    setTicket(null)      // al quedar en null, la pantalla vuelve a mostrar el formulario
  }

  // Aquí está la decisión clave: si ya existe un ticket, mostramos la pantalla
  // de confirmación y nos salimos de la función (el return de abajo ya no se ejecuta).
  if (ticket) {
    return (
      <div className="page">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <h1>Solicitud registrada</h1>
          <p>Tu ticket fue creado exitosamente. Nuestro equipo responderá en menos de 24 horas hábiles.</p>

          {/* Mostramos los datos que el usuario llenó, ya guardados dentro de "ticket" */}
          <div className="confirmation-details">
            <p>
              <strong>Número de ticket:</strong> {ticket.numero}
            </p>
            <p>
              <strong>Equipo:</strong> {ticket.equipo}
            </p>
            <p>
              <strong>Tipo de problema:</strong> {ticket.tipoProblema}
            </p>
            <p>
              <strong>Descripción:</strong> {ticket.descripcion}
            </p>
            {/* Esta línea solo aparece si el usuario adjuntó al menos un archivo */}
            {ticket.archivos.length > 0 && (
              <p>
                <strong>Archivos adjuntos:</strong> {ticket.archivos.join(', ')}
              </p>
            )}
          </div>

          <button className="btn btn-primary" onClick={handleNuevaSolicitud}>
            Crear otra solicitud
          </button>
        </div>
      </div>
    )
  }

  // Si no hay ticket todavía, mostramos el formulario normal.
  return (
    <div className="page">
      <div className="page-header">
        <h1>Soporte Técnico Especializado</h1>
        <p>Cuéntanos qué le pasa a tu equipo y te asignaremos un ticket de inmediato.</p>
      </div>

      {/* Cuando este formulario se envía, se dispara handleSubmit de arriba */}
      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Equipo afectado
          <input
            type="text"
            name="equipo"
            placeholder="Ej: Laptop HP Pavilion 15"
            required
            value={form.equipo}       // el input siempre muestra lo que hay guardado en "form"
            onChange={handleChange}   // y cada tecla que se escribe actualiza "form"
          />
        </label>

        <label>
          Tipo de problema
          <select name="tipoProblema" value={form.tipoProblema} onChange={handleChange}>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Red / Conectividad">Red / Conectividad</option>
            <option value="Otro">Otro</option>
          </select>
        </label>

        <label>
          Describe el problema
          <textarea
            name="descripcion"
            rows="4"
            required
            placeholder="Describe qué le pasa a tu equipo..."
            value={form.descripcion}
            onChange={handleChange}
          />
        </label>

        <label>
          Adjuntar fotos (opcional)
          <input type="file" multiple accept="image/*" onChange={handleArchivos} />
        </label>

        <button type="submit" className="btn btn-primary">
          Enviar solicitud
        </button>
      </form>
    </div>
  )
}