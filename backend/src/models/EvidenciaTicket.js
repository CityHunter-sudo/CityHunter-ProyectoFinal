// Separado de Ticket porque un mismo ticket puede tener VARIAS fotos
// (un solo campo "urlFoto" dentro de Ticket solo permitiría una).
const mongoose = require('mongoose');

const evidenciaTicketSchema = new mongoose.Schema({
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', required: true },
  urlFoto: { type: String, required: true },
  descripcion: { type: String },
  fechaSubida: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EvidenciaTicket', evidenciaTicketSchema);
