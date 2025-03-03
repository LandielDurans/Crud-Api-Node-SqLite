const Joi = require('joi')

const productSchema = Joi.object({
    name: Joi.string()
        .min(3)
        .regex(/^[a-zA-Z0-9]*$/)
        .optional()
        .messages({
            'string.pattern.base': 'O nome do produto pode conter apenas letras, números e espaço',
            'string.min': 'O nome do produto deve ter pelo menos 3 caracteres',
            'any.required': 'O nome do produto é obrigatório.'
        }),
    price: Joi
        .number()
        .positive()
        .precision(2)
        .optional()
        .messages({
            'number.precision': 'O preço deve ter no máximo 2 casas decimais.',
            'number.positive': 'O preço deve ser um número positivo.',
            'any.required': 'O preço é obrigatório.'
        }),
    description: Joi.string()
        .min(5)
        .optional()
        .messages({
            'string-min': 'A descrição deve ter pelo menos 5 caracteres.'
        }),
    stock: Joi.number()
        .integer()
        .min(0)
        .optional()
        .messages({
            'number.min': 'O estoque não pode ser negativo'
        })
})

exports.validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body)
    if (error) return res.status(400).json({ message: error.details[0].message })
    next()
}