const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
          nombre: Joi.string().required(),
          primer_apellido: Joi.string().required(),
          segundo_apellido: Joi.string().required(),
          celular: Joi.string().required(),
          rfc: Joi.string().required(),
          rfc_nombre: Joi.string().required(),
          rfc_url: Joi.string().required(),
          cedula: Joi.string().required(),
          cedula_nombre: Joi.string().required(),
          cedula_url: Joi.string().required(),
          fecha_vencimiento_cedula: Joi.date().required(),
          fecha_nacimiento: Joi.date().required(),
          correo: Joi.string().email().required(),
          estado_cuenta: Joi.string().required(),
          comprobante_domicilio_nombre: Joi.string().required(),
          comprobante_domicilio_url: Joi.string().required(),
          contrato_nombre: Joi.string().required(),
          contrato_url: Joi.string().required(),
          zona_atencion: Joi.string().required(),
          estado: Joi.string().required(),
          municipio: Joi.string().required()
        }),
      }),
      updateOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
          nombre: Joi.string(),
          primer_apellido: Joi.string(),
          segundo_apellido: Joi.string(),
          celular: Joi.string(),
          rfc: Joi.string(),
          rfc_nombre: Joi.string(),
          rfc_url: Joi.string(),
          cedula: Joi.string(),
          cedula_nombre: Joi.string(),
          cedula_url: Joi.string(),
          fecha_vencimiento_cedula: Joi.date(),
          fecha_nacimiento: Joi.date(),
          correo: Joi.string().email(),
          estado_cuenta: Joi.string(),
          comprobante_domicilio_nombre: Joi.string(),
          comprobante_domicilio_url: Joi.string(),
          contrato_nombre: Joi.string(),
          contrato_url: Joi.string(),
          zona_atencion: Joi.string(),
          estado: Joi.string(),
          municipio: Joi.string()
        }),
      }),
      deleteOne: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
          id: Joi.string().required(),
        }),
      }),
}