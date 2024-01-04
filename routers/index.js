const express = require('express');

const { verifyToken } = require('../middlewares');

const router = express.Router();

router.use(require('./AuthRouter'));

router.use(verifyToken);

router.use(require('./UsuarioRouter'));
router.use(require('./AjustadorRouter'))
router.use(require('./AseguradoraRouter'));
router.use(require('./SiniestroRouter'))

module.exports = router;
