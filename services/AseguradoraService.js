const { Op } = require('sequelize');
const { Aseguradora } = require('../models');

module.exports = {
  create: (body) => Aseguradora.create(body),
  findAll: () => Aseguradora.findAll({
    attributes: ['id_aseguradora', 'nombre', 'razon_social'],
    where: { eliminado: 0 },
    order: [
      ['nombre', 'ASC'],
    ],
  }),
  findAllNombres: (id_aseguradoras) => Aseguradora.findAll({
    attributes: ['nombre'],
    where: { id_aseguradora: { [Op.or]: id_aseguradoras }, eliminado: 0 },
    order: [
      ['nombre', 'ASC'],
    ],
  }),
  findOneById: (id_aseguradora) => Aseguradora.findByPk(id_aseguradora),
  updateOne: (aseguradora, body) => {
    Object.assign(aseguradora, body);
    return aseguradora.save();
  },
};
