const express = require('express');
const { verifyToken } = require('../middlewares');

const router = express.Router();

const { UsuarioValidator } = require('../validators');
const { UsuarioController } = require('../controllers');


router.post('/iniciar-sesion',
  UsuarioValidator.login,
  UsuarioController.login);

module.exports = router;
