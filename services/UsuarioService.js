const { Usuario } = require('../models');

module.exports = {
  create: (body) => Usuario.create(body),
  findAll: () => Usuario.findAll({
    attributes: { exclude: ['contrasena', 'created_at', 'updated_at'] },
    where: { eliminado: false }}),
  findOneByEmail: (correo) => Usuario.findOne({ where: { correo, eliminado: false } }),
  findOneById: (id_usuario) => Usuario.findByPk(id_usuario),
  updateOne: (usuario, body) => {
    Object.assign(usuario, body);
    return usuario.save();
  },
};
