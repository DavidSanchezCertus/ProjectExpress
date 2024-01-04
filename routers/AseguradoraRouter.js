const express = require('express');

const router = express.Router();

const { AseguradoraValidator } = require('../validators');
const { AseguradoraController } = require('../controllers');

router.post('/aseguradoras',
  AseguradoraValidator.create,
  AseguradoraController.create);

router.get('/aseguradoras',
  AseguradoraController.findAll);
  
router.get('/aseguradoras/:id',
  AseguradoraValidator.findOneById,
  AseguradoraController.findOneById);

router.get('/aseguradoras/nombre/:nombre',
  AseguradoraValidator.findOneByNombre,
  AseguradoraController.findOneByNombre);

router.patch('/aseguradoras/:id',
  AseguradoraValidator.updateOne,
  AseguradoraController.updateOne);

router.delete('/aseguradoras/:id',
  AseguradoraValidator.deleteOne,
  AseguradoraController.deleteOne);

module.exports = router;
