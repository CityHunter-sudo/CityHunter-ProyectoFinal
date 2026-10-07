// Este archivo prende el servidor. Se separa de app.js a propósito:
// app.js define QUÉ hace el servidor, este archivo solo lo arranca.
require('dotenv').config(); // lee el archivo .env y carga MONGODB_URI, etc.

const app = require('./app');
const conectarDB = require('./config/db');

const PUERTO = process.env.PORT || 4000;

// Primero nos conectamos a MongoDB, y SOLO si eso funciona, prendemos el servidor.
// Si la base de datos no conecta, no tiene sentido levantar la API.
conectarDB().then(() => {
  app.listen(PUERTO, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PUERTO}`);
  });
});
