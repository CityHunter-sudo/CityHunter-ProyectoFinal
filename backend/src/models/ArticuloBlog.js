const mongoose = require('mongoose');

const articuloBlogSchema = new mongoose.Schema(
  {
    autorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    urlVideo: { type: String },
    tieneSubtitulos: { type: Boolean, default: true },
  },
  { timestamps: true } // createdAt = fecha de publicación
);

module.exports = mongoose.model('ArticuloBlog', articuloBlogSchema);
