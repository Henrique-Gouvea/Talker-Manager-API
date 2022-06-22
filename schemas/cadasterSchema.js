const Joi = require('joi').extend(require('@joi/date'));

const cadasterSchema = Joi.object({
    name: Joi
    .string()
    .min(3)
    .required()
    .messages({
        'string.empty': 'O campo "name" é obrigatório',
        'string.min': 'O "name" deve ter pelo menos 3 caracteres',
        'any.required': 'O campo "name" é obrigatório',
    }),
    age: Joi
    .number()
    .min(18)
    .integer()
    .required()
    .messages({
        'number.empty': 'O campo "age" é obrigatório',
        'number.min': 'A pessoa palestrante deve ser maior de idade',
        'any.required': 'O campo "age" é obrigatório',
    }),
    talk: Joi.object({
        watchedAt: Joi
        .date()
        .format('DD/MM/YYYY')
        .required()
        .messages({
            'any.required': 'O campo "watchedAt" é obrigatório',
            'date.format': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        }),
        rate: Joi
        .number()
        .required()
        .min(1)
        .max(5)
        .message({
            'number.empty': 'O campo "rate" é obrigatório',
            'number.min': 'O campo "rate" deve ser um inteiro de 1 à 5',
            'number.max': 'O campo "rate" deve ser um inteiro de 1 à 5',
            'any.required': 'O campo "rate" é obrigatório',
        }),
    })
    .required()
    .messages({
        'object.empty': 'O campo "talk" é obrigatório',
        'any.required': 'O campo "talk" é obrigatório',
        // 'object.rate': 'O campo "rate" é obrigatório',
    }),
}).required();

module.exports = cadasterSchema;