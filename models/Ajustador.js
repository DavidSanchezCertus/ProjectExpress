const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');

const Ajustador = sequelize.define('Ajustadores', {
  id_ajustador: {
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
  celular: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  rfc: {
    type: DataTypes.STRING(13),
    allowNull: false,
  },
  rfc_nombre: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  rfc_url: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  cedula: {
    type: DataTypes.STRING(20),
    allowNull: false,

  },
  cedula_nombre: {
    type: DataTypes.STRING(),
    allowNull: false,

  },
  cedula_url: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  fecha_vencimiento_cedula: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  fecha_nacimiento: {
    type: DataTypes.DATE(),
    allowNull: false,
  },
  correo: {
    type: DataTypes.STRING(50),
    allowNull: false,

  },
  estado_cuenta: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  comprobante_domicilio_nombre: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  comprobante_domicilio_url: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  contrato_nombre: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  contrato_url: {
    type: DataTypes.STRING(),
    allowNull: false,
  },
  zona_atencion: {
    type: DataTypes.STRING(13),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  municipio: {
    type: DataTypes.STRING(50),
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

module.exports = Ajustador;
