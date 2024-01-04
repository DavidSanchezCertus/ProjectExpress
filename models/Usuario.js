/* eslint-disable no-console */
const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
// prueba
const sequelize = require('../database');

const Usuario = sequelize.define('Usuarios', {
  // Model attributes are defined here
  id_usuario: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  primer_apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  segundo_apellido: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  contrasena: {
    type: DataTypes.STRING(),
    allowNull: true,
  },
  rol: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  eliminado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  hooks: {
    beforeCreate: (usuario) => {
      const salt = bcrypt.genSaltSync(10);
      // eslint-disable-next-line no-param-reassign
      usuario.contrasena = bcrypt.hashSync(usuario.contrasena, salt);
    },
    beforeUpdate: (usuario) => {
      const salt = bcrypt.genSaltSync(10);
      // eslint-disable-next-line no-param-reassign
      if (usuario.contrasena) usuario.contrasena = bcrypt.hashSync(usuario.contrasena, salt);
    },
  },
});

module.exports = Usuario;
