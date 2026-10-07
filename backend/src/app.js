// Aquí se arma la aplicación: qué middlewares usa y qué rutas atiende.
const express = require('express');
const usuarioRoutes = require('./routes/usuario.routes');

const app = express();

// Permite que Express entienda cuerpos de petición en formato JSON.
app.use(express.json());

// Ruta de prueba: confirma que el servidor está vivo.
app.get('/', (req, res) => {
  res.json({ mensaje: 'API de City Hunter funcionando correctamente' });
});

// Todo lo que llegue a /api/usuarios se maneja en usuario.routes.js
app.use('/api/usuarios', usuarioRoutes);

// Aquí se irán agregando más adelante las demás rutas

module.exports = app;
