// Separado de Producto para poder llevar el control de existencias
// (y, si el día de mañana hay varias bodegas, sin tocar la tabla de productos).
const mongoose = require('mongoose');

const inventarioSchema = new mongoose.Schema({
  productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Producto', required: true },
  cantidadDisponible: { type: Number, required: true, default: 0, min: 0 },
  bodega: { type: String, default: 'Principal' },
  fechaActualizacion: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Inventario', inventarioSchema);
