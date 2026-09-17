import { useState } from 'react'

const initialForm = {
  equipo: '',
  tipoProblema: 'Hardware',
  descripcion: '',
  archivos: [],
}

export default function SoporteTecnico() {
  const [form, setForm] = useState(initialForm)
  const [ticket, setTicket] = useState(null)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleArchivos(e) {
    const nombres = Array.from(e.target.files).map((file) => file.name)
    setForm({ ...form, archivos: nombres })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const numeroTicket = 'TCK-' + Math.floor(1000 + Math.random() * 9000)
    setTicket({ numero: numeroTicket, ...form })
  }

  function handleNuevaSolicitud() {
    setForm(initialForm)
    setTicket(null)
  }

  if (ticket) {
    return (
      <div className="page">
        <div className="confirmation-card">
          <div className="confirmation-icon">✓</div>
          <h1>Solicitud registrada</h1>
          <p>Tu ticket fue creado exitosamente. Nuestro equipo responderá en menos de 24 horas hábiles.</p>

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

  return (
    <div className="page">
      <div className="page-header">
        <h1>Soporte Técnico Especializado</h1>
        <p>Cuéntanos qué le pasa a tu equipo y te asignaremos un ticket de inmediato.</p>
      </div>

      <form className="form-card" onSubmit={handleSubmit}>
        <label>
          Equipo afectado
          <input
            type="text"
            name="equipo"
            placeholder="Ej: Laptop HP Pavilion 15"
            required
            value={form.equipo}
            onChange={handleChange}
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
