const mongoose = require('mongoose');

const cotizacionSchema = new mongoose.Schema(
  {
    empresaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true },
    descripcionServicio: { type: String, required: true },
    montoEstimado: { type: Number, required: true, min: 0 },
    estado: {
      type: String,
      default: 'Pendiente',
      enum: ['Pendiente', 'Aprobada', 'Rechazada'],
    },
    fechaRespuesta: { type: Date },
  },
  { timestamps: true } // createdAt = fecha de solicitud
);

module.exports = mongoose.model('Cotizacion', cotizacionSchema);
