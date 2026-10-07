// Datos propios de un cliente corporativo, que una persona natural no tiene
// (NIT, razón social). usuarioId es el contacto principal de esa empresa
// dentro de la plataforma (su cuenta de inicio de sesión).
const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  razonSocial: { type: String, required: true },
  nit: { type: String, required: true, unique: true },
  sector: { type: String },
  telefonoCorporativo: { type: String },
  direccionFiscal: { type: String },
});

module.exports = mongoose.model('Empresa', empresaSchema);
