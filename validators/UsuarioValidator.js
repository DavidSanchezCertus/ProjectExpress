const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      nombre: Joi.string().required(),
      primer_apellido: Joi.string().required(),
      segundo_apellido: Joi.string().required(),
      correo: Joi.string().email().required(),
      contrasena: Joi.string().required(),
      rol: Joi.string().required(),
    }),
  }),
  login: celebrate({
    [Segments.BODY]: Joi.object().keys({
      correo: Joi.string().email().required(),
      contrasena: Joi.string().required().messages({
        'string.empty': `El campo contraseña esta vacio`,
        'any.required': `El campo contraseña es requerido`
      }),
    }),
  }),
  findOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id_usuario: Joi.string().required(),
    }),
  }),
  updateOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id_usuario: Joi.string().required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      nombre: Joi.string(),
      primer_apellido: Joi.string(),
      segundo_apellido: Joi.string(),
      correo: Joi.string().email(),
      contrasena: Joi.string().allow(''),
      rol: Joi.string(),
    }),
  }),
  deleteOne: celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id_usuario: Joi.string().required(),
    }),
  })
};
