// Citas de consultoría/asesoría con empresas (distinto de Envio, que es logística de paquetes).
const mongoose = require('mongoose');

const citaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  fechaHora: { type: Date, required: true },
  motivo: { type: String, required: true },
  estado: { type: String, default: 'Agendada' },
});

module.exports = mongoose.model('Cita', citaSchema);
