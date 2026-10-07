// Cubre la HU3 (Logística): programar la entrega de una compra o la recogida
// de un equipo para soporte técnico, con un código de trazabilidad.
// Solo uno de pedidoId / ticketId se usa, según el campo "tipo":
// - tipo "Entrega"  -> va ligado a un pedidoId (se está entregando una compra)
// - tipo "Recogida" -> va ligado a un ticketId (se está recogiendo un equipo dañado)
const mongoose = require('mongoose');

const envioSchema = new mongoose.Schema({
  tipo: { type: String, required: true, enum: ['Entrega', 'Recogida'] },
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', default: null },
  ticketId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ticket', default: null },
  direccionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Direccion', required: true },
  fechaProgramada: { type: Date, required: true },
  franjaHoraria: { type: String, required: true },
  codigoTrazabilidad: { type: String, required: true, unique: true },
  estado: {
    type: String,
    default: 'Programado',
    enum: ['Programado', 'En tránsito', 'Entregado', 'Cancelado'],
  },
});

module.exports = mongoose.model('Envio', envioSchema);
