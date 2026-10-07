const mongoose = require('mongoose');

const pedidoSchema = new mongoose.Schema(
  {
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    direccionEntregaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Direccion', required: true },
    estadoId: { type: mongoose.Schema.Types.ObjectId, ref: 'EstadoPedido', required: true },
    total: { type: Number, required: true, min: 0 },
  },
  { timestamps: true } // createdAt hace las veces de "fecha_pedido"
);

module.exports = mongoose.model('Pedido', pedidoSchema);
