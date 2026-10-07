// Mensajes del formulario de contacto público. No se liga a un usuarioId
// porque cualquier visitante puede escribir, incluso sin tener cuenta.
const mongoose = require('mongoose');

const mensajeContactoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    telefono: { type: String, required: true },
    asunto: { type: String, required: true },
    mensaje: { type: String, required: true },
  },
  { timestamps: true } // createdAt = fecha de envío
);

module.exports = mongoose.model('MensajeContacto', mensajeContactoSchema);
