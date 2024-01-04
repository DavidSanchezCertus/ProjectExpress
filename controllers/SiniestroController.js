const { SiniestroService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      await SiniestroService.create(req.body);
      console.log(res);
      return res.status(201).json({ message: 'Nueva Siniestro creada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const siniestros = await SiniestroService.findAll();
      return res.status(200).json(siniestros);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const siniestro = await SiniestroService.findOneById(id);
      if (!siniestro) return res.status(404).json({ message: 'Siniestro no encontrada!' });
      await SiniestroService.updateOne(siniestro, body);
      return res.status(200).json({ message: 'Siniestro actualizada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const siniestro = await SiniestroService.findOneById(id);
      if (!siniestro) return res.status(404).json({ message: 'Siniestro no encontrada!' });
      await SiniestroService.updateOne(siniestro, { eliminado: true });
      return res.status(204).json({ message: 'Siniestro eliminado con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
