const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  marca: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String },
  // min: 0 evita que, por error del código, se guarde un precio negativo.
  precio: { type: Number, required: true, min: 0 },
  urlImagen: { type: String },
});

module.exports = mongoose.model('Producto', productoSchema);
