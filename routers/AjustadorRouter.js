const express = require('express');

const router = express.Router();

const { AjustadorValidator } = require('../validators');
const { AjustadorController } = require('../controllers');

router.post('/ajustadores',
  AjustadorValidator.create,
  AjustadorController.create);

router.get('/ajustadores',
  AjustadorController.findAll);

router.patch('/ajustadores/:id',
  AjustadorValidator.updateOne,
  AjustadorController.updateOne);

router.delete('/ajustadores/:id',
  AjustadorValidator.deleteOne,
  AjustadorController.deleteOne);

module.exports = router;
