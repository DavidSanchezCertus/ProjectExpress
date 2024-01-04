const jwt = require('jsonwebtoken');

const { UsuarioService, Recuperar_ContrasenaService } = require('../services');
const { validPassword, createToken, recoveryPasswordToken } = require('../utils');

module.exports = {
  create: async (req, res) => {
    const { body } = req;
    try {
      const usuarioExiste = await UsuarioService.findOneByEmail(body.correo);
      if (usuarioExiste) return res.status(400).json({ message: 'Correo ya utilizado 🚫🚫🚫' });
      const usuario = await UsuarioService.create(body);
      if(usuario) return res.status(201).json({ message: 'Usuario creado con éxito 🎉🎉🎉' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const usuarios = await UsuarioService.findAll();
      return res.status(200).json(usuarios);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findOne: async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await UsuarioService.findOneById(id);
      return res.status(200).json(usuario);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id_usuario } = req.params;
    const { body } = req;
    try {
      const usuario = await UsuarioService.findOneById(id_usuario);
      if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado ❕❕❕' });
      if (body.correo) {
        const usuarioExiste = await UsuarioService.findOneByEmail(body.correo);
        if (usuarioExiste && (body.correo !== usuario.correo)) return res.status(400).json({ message: 'Correo ya utilizado ❕❕❕' });
      }
      if (body.contrasena) {
        usuario.contrasena = body.contrasena;
      } else {
        usuario.contrasena = undefined;
        delete body.contrasena;
      }
      const usuarioActualizado = await UsuarioService.updateOne(usuario, body);
      if(usuarioActualizado) return res.status(200).json({ message: 'Usuario actualizado con éxito 🎉🎉🎉' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id_usuario } = req.params;
    try {
      const usuario = await UsuarioService.findOneById(id_usuario);
      if (!usuario) return res.status(400).json({ message: 'Usuario no encontrado ❕❕❕' });
      await UsuarioService.updateOne(usuario, { eliminado: 1 });
      return res.status(204).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  login: async (req, res) => {
    const { correo, contrasena } = req.body;
    try {
      const usuarioExiste = await UsuarioService.findOneByEmail(correo);
      if (!usuarioExiste) return res.status(400).json({ message: 'Error en las credenciales  ❌❌❌' });
      const esValido = validPassword(contrasena, usuarioExiste.contrasena);
      if (!esValido) return res.status(400).json({ message: 'Error en las credenciales  ❌❌❌' });
      const token = createToken(usuarioExiste);
      if (!token) return res.status(500).json({ message: 'Error en las credenciales  ❌❌❌' });
      return res.status(200).json({ message: 'Inicio de Sesión exitoso!!!', token });
    } catch (err) {
      return res.status(400).json(err);
    }
  }
};
