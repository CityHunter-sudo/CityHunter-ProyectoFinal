// Separado de Pedido para poder registrar reintentos de pago, el método usado
// y la referencia que devuelve la pasarela de pagos (Wompi, PayU, etc.).
const mongoose = require('mongoose');

const pagoSchema = new mongoose.Schema(
  {
    pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Pedido', required: true },
    metodoPago: {
      type: String,
      required: true,
      enum: ['Tarjeta', 'PSE', 'Contraentrega'],
    },
    monto: { type: Number, required: true, min: 0 },
    estado: {
      type: String,
      default: 'Pendiente',
      enum: ['Pendiente', 'Aprobado', 'Rechazado'],
    },
    referenciaTransaccion: { type: String }, // ID que devuelve la pasarela de pagos
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pago', pagoSchema);
