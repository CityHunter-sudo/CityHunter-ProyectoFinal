// Este archivo se encarga de una sola cosa: conectar la aplicación a MongoDB.

const mongoose = require('mongoose');

async function conectarDB() {
  try {
    // La URI de conexión viene del archivo .env (nunca se escribe directo aquí, para no subirla a GitHub).
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Conectado a MongoDB (CityHunterDB)');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
}

module.exports = conectarDB;
