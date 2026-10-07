const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema(
  {
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true }, // el cliente
    tecnicoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', default: null }, // null hasta que se asigne alguien
    estadoId: { type: mongoose.Schema.Types.ObjectId, ref: 'EstadoTicket', required: true },
    dispositivo: { type: String, required: true },
    descripcionFalla: { type: String, required: true },
  },
  { timestamps: true } // createdAt = fecha de apertura, updatedAt = última actualización
);

module.exports = mongoose.model('Ticket', ticketSchema);
