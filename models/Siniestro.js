const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Siniestro = sequelize.define('Siniestros', {
  id_siniestro: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  siniestro: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  reporte: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  poliza: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(13),
    allowNull: false,
  },
  fecha_asignacion: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  fecha_arribo: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  fecha_termino: {
    type: DataTypes.DATE(),
    allowNull: false,

  },
  recuperacion: {
    type: DataTypes.STRING(),
    allowNull: false,

  },
  asignacion_legal: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  sipac: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  taller: {
    type: DataTypes.DATE(),
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

module.exports = Siniestro;
