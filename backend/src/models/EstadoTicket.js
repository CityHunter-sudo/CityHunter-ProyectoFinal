// Catálogo de estados por los que pasa un ticket de soporte
// (Abierto, Diagnostico, Reparacion, Esperando Repuesto, Finalizado, Entregado, Cancelado).
const mongoose = require('mongoose');

const estadoTicketSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('EstadoTicket', estadoTicketSchema);
