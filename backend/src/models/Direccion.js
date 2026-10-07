// Un usuario puede tener varias direcciones guardadas (casa, oficina, etc.).
// Pedidos y Envios hacen referencia a una direccionId de aquí.
const mongoose = require('mongoose');

const direccionSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  etiqueta: { type: String }, // ej: "Casa", "Oficina"
  direccionLinea: { type: String, required: true },
  ciudad: { type: String, required: true },
  departamento: { type: String },
  referencia: { type: String }, // indicaciones adicionales para encontrarla
  esPrincipal: { type: Boolean, default: false },
});

module.exports = mongoose.model('Direccion', direccionSchema);
