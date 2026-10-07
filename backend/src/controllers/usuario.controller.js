// Comunicacion con la base de datos
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const Rol = require('../models/Rol');

// POST /api/usuarios/registro
// "rol" es opcional: "Cliente" (por defecto) o "Empresa". Los roles de Tecnico

async function registrar(req, res) {
  try {
    const {
      nombreCompleto,
      correo,
      contrasena,
      telefono,
      tipoDocumento,
      numDocumento,
      rol,
    } = req.body;

    // Validación básica de que llegaron los campos obligatorios.
    if (!nombreCompleto || !correo || !contrasena || !telefono || !tipoDocumento || !numDocumento) {
      return res.status(400).json({ mensaje: 'Todos los campos son obligatorios' });
    }

    // Revisamos que no exista ya un usuario con ese correo o documento.
    const yaExiste = await Usuario.findOne({
      $or: [{ correo }, { numDocumento }],
    });
    if (yaExiste) {
      return res.status(409).json({ mensaje: 'El usuario ya está registrado' });
    }

    // Buscamos el rol correspondiente (Cliente por defecto).
    const nombreRol = rol === 'Empresa' ? 'Empresa' : 'Cliente';
    const rolEncontrado = await Rol.findOne({ nombre: nombreRol });
    if (!rolEncontrado) {
      // Esto solo pasaría si no se corrió el script de datos semilla (roles).
      return res.status(500).json({ mensaje: `No existe el rol "${nombreRol}" en la base de datos` });
    }

    // se "hashea" (se convierte en un texto irreversible) antes de guardarla.
    const contrasenaHasheada = await bcrypt.hash(contrasena, 10);

    const nuevoUsuario = await Usuario.create({
      nombreCompleto,
      correo,
      contrasena: contrasenaHasheada,
      telefono,
      tipoDocumento,
      numDocumento,
      rolId: rolEncontrado._id,
    });

    // Respondemos sin el campo contrasena, aunque esté hasheada no hay razón para devolverla.
    return res.status(201).json({
      mensaje: 'Registro satisfactorio en City Hunter',
      usuario: {
        id: nuevoUsuario._id,
        nombreCompleto: nuevoUsuario.nombreCompleto,
        correo: nuevoUsuario.correo,
        rol: nombreRol,
      },
    });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error interno al registrar el usuario', error: error.message });
  }
}

// POST /api/usuarios/login

async function login(req, res) {
  try {
    const { correo, contrasena } = req.body;

    if (!correo || !contrasena) {
      return res.status(400).json({ mensaje: 'Correo y contraseña son obligatorios' });
    }

    // populate('rolId') trae también los datos del rol, no solo su ID.
    const usuario = await Usuario.findOne({ correo }).populate('rolId');

    if (!usuario) {
      return res.status(401).json({ mensaje: 'Error en la autenticación' });
    }

    // bcrypt.compare compara la contraseña escrita contra el hash guardado
    // (nunca se puede "deshacer" un hash, solo comparar si coinciden).
    const contrasenaValida = await bcrypt.compare(contrasena, usuario.contrasena);

    if (!contrasenaValida) {
      return res.status(401).json({ mensaje: 'Error en la autenticación' });
    }

    return res.status(200).json({
      mensaje: 'Autenticación satisfactoria',
      usuario: {
        id: usuario._id,
        nombreCompleto: usuario.nombreCompleto,
        correo: usuario.correo,
        rol: usuario.rolId.nombre,
      },
    });
  } catch (error) {
    return res.status(500).json({ mensaje: 'Error interno al iniciar sesión', error: error.message });
  }
}

module.exports = { registrar, login };
