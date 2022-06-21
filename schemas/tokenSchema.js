const Joi = require('joi');

const tokenSchema = Joi.object({
    token: Joi
    .string()
    .min(16)
    .max(16)
    .required()
    .messages({
        'string.empty': 'Token não encontrado',
        'string.min': 'Token inválido',
        'string.max': 'Token inválido',
        'any.required': 'Token não encontrado',
    }),
});

module.exports = tokenSchema;