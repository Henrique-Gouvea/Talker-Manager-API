const Joi = require('joi');

const cadasterSchema = Joi.object({
    name: Joi
    .string()
    .min(3)
    .required()
    .messages({
        'string.empty': 'O campo "name" é obrigatório',
        'any.required': 'O campo "name" é obrigatório',
    }),
    age: Joi
    .number()
    .min(18)
    .required()
    .messages({
        'string.empty': 'O campo "age" é obrigatório',
        'string.min': 'A pessoa palestrante deve ser maior de idade',
        'any.required': 'O campo "age" é obrigatório',
    }),
});

module.exports = cadasterSchema;