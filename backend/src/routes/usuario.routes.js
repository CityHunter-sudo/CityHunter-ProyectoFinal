const express = require('express');
const router = express.Router();
const { registrar, login } = require('../controllers/usuario.controller');

// POST http://localhost:4000/api/usuarios/registro
router.post('/registro', registrar);

// POST http://localhost:4000/api/usuarios/login
router.post('/login', login);

module.exports = router;
