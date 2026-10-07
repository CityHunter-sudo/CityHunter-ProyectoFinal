// Cada fila es "un producto dentro de un pedido". Un pedido con 3 productos
// distintos tiene 3 documentos DetallePedido con el mismo pedidoId.
const mongoose = require('mongoose');

const detallePedidoSchema = new mongoose.Schema({
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidad: { type: Number, required: true, min: 1 },
  // Se guarda el precio del producto EN EL MOMENTO de la compra, para que si
  // el precio del producto cambia después, los pedidos viejos no se alteren.
  precioUnitario: { type: Number, required: true, min: 0 },
});

module.exports = mongoose.model('DetallePedido', detallePedidoSchema);
