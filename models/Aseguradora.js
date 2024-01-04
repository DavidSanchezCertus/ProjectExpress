const { Sequelize, DataTypes } = require('sequelize');

const sequelize = require('../database');

const Aseguradora = sequelize.define('Aseguradoras', {
  id_aseguradora: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  razon_social: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  eliminado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
});

module.exports = Aseguradora;
