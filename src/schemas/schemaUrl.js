const Joi = require('joi');

const schemaUrl = Joi.object({
    url: Joi.string().uri().required().messages({
        'string.base': 'A URL deve ser uma string',
        'string.uri': 'A URL fornecida não é válida',
        'any.required': 'É necessário fornecer uma URL'
    })
});

module.exports = schemaUrl;