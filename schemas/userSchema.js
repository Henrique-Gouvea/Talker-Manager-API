const Joi = require('joi');

const userSchema = Joi.object({
    email: Joi
    .string()
    .email()
    .required()
    .messages({
        'string.empty': 'O campo "email" é obrigatório',
        'string.email': 'O "email" deve ter o formato "email@email.com"',
    }),
    password: Joi
    .string()
    .min(6)
    .required()
    .messages({
        'string.empty': 'O campo "password" é obrigatório',
        'string.min': 'O "password" deve ter pelo menos 6 caracteres',
    }),
});

module.exports = userSchema;