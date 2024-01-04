const express = require('express');
const { verifyToken } = require('../middlewares');

const router = express.Router();

const { UsuarioValidator } = require('../validators');
const { UsuarioController } = require('../controllers');


router.post('/usuarios',
  UsuarioValidator.create,
  UsuarioController.create);

router.get('/usuarios',
  UsuarioController.findAll);

router.get('/usuarios/:id_usuario',
  UsuarioValidator.findOne,
  UsuarioController.findOne);

router.patch('/usuarios/:id_usuario',
  UsuarioValidator.updateOne,
  UsuarioController.updateOne);

router.delete('/usuarios/:id_usuario',
  UsuarioValidator.deleteOne,
  UsuarioController.deleteOne);

module.exports = router;
