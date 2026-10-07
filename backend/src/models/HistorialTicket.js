// Registra cada cambio de estado de un ticket (una especie de bitácora).
// Por ejemplo: "pasó de Abierto a Diagnostico el 10/10, hecho por el técnico X".
const mongoose = require('mongoose');

const historialTicketSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  estadoAnterior: { type: String },
  estadoNuevo: { type: String, required: true },
  comentario: { type: String },
  usuarioResponsableId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' },
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model('HistorialTicket', historialTicketSchema);
