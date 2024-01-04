const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
          siniestro: Joi.string().required(),
          reporte: Joi.string().required(),
          poliza: Joi.string().required(),
          ubicacion: Joi.string().required(),
          estado: Joi.string().required(),
          fecha_asignacion: Joi.date().required(),
          fecha_arribo: Joi.date().required(),
          fecha_termino: Joi.date().required(),
          recuperacion: Joi.string().required(),
          asignacion_legal: Joi.string().required(),
          sipac: Joi.string().required(),
          taller: Joi.string().required(),
        }),
      }),
      updateOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
          siniestro: Joi.string(),
          reporte: Joi.string(),
          poliza: Joi.string(),
          ubicacion: Joi.string(),
          estado: Joi.string(),
          fecha_asignacion: Joi.date(),
          fecha_arribo: Joi.date(),
          fecha_termino: Joi.date(),
          recuperacion: Joi.string(),
          asignacion_legal: Joi.string(),
          sipac: Joi.string(),
          taller: Joi.string(),
        }),
      }),
      deleteOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required(),
        }),
      }),
}