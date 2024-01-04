const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  validPassword(reqContrasena, usuarioContrasena) {
    return bcrypt.compareSync(reqContrasena, usuarioContrasena);
  },
  createToken: (usuario) => {
    const payload = {
      id_usuario: usuario.id_usuario,
      correo: usuario.correo,
      nombre: usuario.nombre,
      primer_apellido: usuario.primer_apellido,
      segundo_apellido: usuario.segundo_apellido,
      rol: usuario.rol,
      exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24),
    };

    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET);
      return token;
    } catch (error) {
      return undefined;
    }
  }
};
