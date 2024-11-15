const Joi = require('joi')

const productSchema = Joi.object({
    name: Joi.string().min(3).required(),
    price: Joi.number().positive().required(),
    description: Joi.string().optional(),
    stock: Joi.number().integer().min(0).optional()
})

exports.validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body)
    if (error) return res.status(400).json({ message: error.details[0].message })
    next()
}