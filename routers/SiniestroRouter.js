const express = require('express');

const router = express.Router();

const { SiniestroValidator } = require('../validators');
const { SiniestroController } = require('../controllers');

router.post('/siniestros',
  SiniestroValidator.create,
  SiniestroController.create);

router.get('/siniestros',
  SiniestroController.findAll);

router.patch('/siniestros/:id',
  SiniestroValidator.updateOne,
  SiniestroController.updateOne);

router.delete('/siniestros/:id',
  SiniestroValidator.deleteOne,
  SiniestroController.deleteOne);

module.exports = router;
