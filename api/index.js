const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { errors } = require('celebrate');

const api = express();
const PORT = process.env.PORT || 3000;
api.use(cors({ origin: '*' }));
api.use(morgan('dev'));
api.use(express.urlencoded({ limit: '50mb', extended: true }));
api.use(express.json({ limit: '50mb', extended: true }));

api.get('/', (req, res) => res.send('SistemaCertus ejecutándose!!!'));

api.use('/api/v1', require('../routers'));

api.use(errors());

module.exports = { api, PORT };
