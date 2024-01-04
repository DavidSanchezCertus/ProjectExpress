const { AseguradoraService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
      await AseguradoraService.create(req.body);
      return res.status(201).json({ message: 'Nueva Aseguradora creada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findAll: async (req, res) => {
    try {
      const aseguradoras = await AseguradoraService.findAll();
      return res.status(200).json(aseguradoras);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findOneById: async (req, res) => {
    const { id } = req.params;
    try {
      const aseguradora = await AseguradoraService.findOneById(id);
      return res.status(200).json(aseguradora);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  findOneByNombre: async (req, res) => {
    const { nombre } = req.params;
    try {
      const aseguradora = await AseguradoraService.findOneByNombre(nombre);
      return res.status(200).json(aseguradora);
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  updateOne: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const aseguradora = await AseguradoraService.findOneById(id);
      if (!aseguradora) return res.status(404).json({ message: 'Aseguradora no encontrada!' });
      await AseguradoraService.updateOne(aseguradora, body);
      return res.status(200).json({ message: 'Aseguradora actualizada con éxito!' });
    } catch (err) {
      return res.status(400).json(err);
    }
  },
  deleteOne: async (req, res) => {
    const { id } = req.params;
    try {
      const aseguradora = await AseguradoraService.findOneById(id);
      if (!aseguradora) return res.status(404).json({ message: 'Aseguradora no encontrada!' });
      await AseguradoraService.updateOne(aseguradora, { eliminado: true });
      return res.status(204).json();
    } catch (err) {
      return res.status(400).json(err);
    }
  },
};
