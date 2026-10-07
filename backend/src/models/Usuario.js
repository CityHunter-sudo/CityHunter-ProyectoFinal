// Representa a cualquier persona que usa la plataforma: cliente particular,
// contacto de una empresa, técnico o administrador. El campo rolId dice cuál es.
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema(
  {
    nombreCompleto: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    // La contraseña nunca se guarda en texto plano: se guarda ya encriptada (hash).
    contrasena: { type: String, required: true },
    telefono: { type: String, required: true },
    tipoDocumento: { type: String, required: true },
    numDocumento: { type: String, required: true, unique: true },
    rolId: { type: mongoose.Schema.Types.ObjectId, ref: 'Rol', required: true },
    estado: { type: String, default: 'Activo' },
  },
  { timestamps: true } // agrega automáticamente createdAt y updatedAt
);

module.exports = mongoose.model('Usuario', usuarioSchema);
