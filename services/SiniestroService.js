const { Siniestro } = require('../models');

module.exports = {
  create: (body) => Siniestro.create(body),
  findAll: () => Siniestro.findAll({ where: { eliminado: 0 } }),
  findOneById: (id_siniestro) => Siniestro.findByPk(id_siniestro),
  updateOne: (siniestro, body) => {
    Object.assign(siniestro, body);
    return siniestro.save();
  },
};
   