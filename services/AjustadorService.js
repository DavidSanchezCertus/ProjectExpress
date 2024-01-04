const { Ajustador } = require('../models');

module.exports = {
  create: (body) => Ajustador.create(body),
  findAll: () => Ajustador.findAll({
    attributes: ['nombre', 'primer_apellido', 'segundo_apellido', 'celular', 'correo'] ,
    where: { eliminado: 0 },
    order: [
      ['nombre', 'ASC'],
    ], }),
  findOneById: (id_ajustador) => Ajustador.findByPk(id_ajustador),
  updateOne: (ajustador, body) => {
    Object.assign(ajustador, body);
    return ajustador.save();
  },
};
