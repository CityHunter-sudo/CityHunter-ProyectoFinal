// Contratos de soporte mensual para empresas (Consultoría IT / Soporte Corporativo).
const mongoose = require('mongoose');

const contratoSLASchema = new mongoose.Schema({
  empresaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true },
  planMensual: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date, required: true },
  costoMensual: { type: Number, required: true, min: 0 },
  estado: { type: String, default: 'Activo' },
});

module.exports = mongoose.model('ContratoSLA', contratoSLASchema);
