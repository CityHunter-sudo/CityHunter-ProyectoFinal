// Catálogo de estados de un pedido (Pendiente, Pagado, Enviado, Entregado, Cancelado).
// Sigue el mismo patrón que EstadoTicket, para mantener el diseño consistente.
const mongoose = require('mongoose');

const estadoPedidoSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('EstadoPedido', estadoPedidoSchema);
