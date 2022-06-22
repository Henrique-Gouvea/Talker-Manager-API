const Joi = require('joi');
// const JoiDate = require('@joi/date');

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
        // .date().format('DD/MM/YYYY')
        .string()
        .regex(/^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/)
        .required()
        .messages({
            'string.empty': 'O campo "watchedAt" é obrigatório',
            'string.pattern.base': 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
            'any.required': 'O campo "watchedAt" é obrigatório',
        }),
        rate: Joi
        .number()
        .required()
        .min(1)
        .required()
        .max(5)
        .required()
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
});

module.exports = cadasterSchema;