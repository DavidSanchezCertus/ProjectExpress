const { AjustadorService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      await AjustadorService.create(req.body);
      console.log(res);
      return res.status(201).json({ message: 'Nueva Ajustador creada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const ajustadores = await AjustadorService.findAll();
      return res.status(200).json(ajustadores);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const ajustador = await AjustadorService.findOneById(id);
      if (!ajustador) return res.status(404).json({ message: 'Ajustador no encontrada!' });
      await AjustadorService.updateOne(ajustador, body);
      return res.status(200).json({ message: 'Ajustador actualizada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const ajustador = await AjustadorService.findOneById(id);
      if (!ajustador) return res.status(404).json({ message: 'Ajustador no encontrada!' });
      await AjustadorService.updateOne(ajustador, { eliminado: true });
      return res.status(204).json({ message: 'Ajustador eliminado con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
