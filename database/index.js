const { Sequelize } = require('sequelize');
const {
  DATABASE, USER, PASS, HOST, DIALECT,
} = require('../config');

Sequelize.DATE.prototype._stringify = function _stringify(date, options) {
  return this._applyTimezone(date, options).format('YYYY-MM-DD HH:mm:ss.SSS');
};

const sequelize = new Sequelize(
  DATABASE,
  USER,
  PASS,
  {
    host: HOST,
    dialect: DIALECT,
    dialectOptions: {
      options: { "requestTimeout": 300000 }
    },
    // timezone: 'America/Hermosillo',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

module.exports = sequelize;