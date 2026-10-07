// Catálogo de roles: Administrador, Tecnico, Cliente, Empresa.
const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
  nombre: { type: String, required: true, unique: true },
  descripcion: { type: String },
});

module.exports = mongoose.model('Rol', rolSchema);
