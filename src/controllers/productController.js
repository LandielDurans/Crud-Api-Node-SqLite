const Product = require("../models/product")
const AvailableID = require('../models/AvailableID');
const sequelize = require("../config/database");

const products = [] // Armazena os produtos

// Cria um novo produto
exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, stock } = req.body;
        const avaliableID = await AvailableID.findOne()
        let idToUse

        if (avaliableID) {
            idToUse = avaliableID.id
            await AvailableID.destroy({ where: { id: idToUse } })
        } else {
            const lastProduct = await Product.findOne({ order: [['id', 'DESC']] })
            idToUse = lastProduct ? lastProduct.id + 1 : 1
        }

        const product = await Product.create({ id: idToUse, name, price, description, stock })
        res.status(201).json(product)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Pega todos os produtos
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Obtém o produto por ID
exports.getProductById = async (req, res) => {
    try {
        const id = req.params.id
        console.log(`Buscando produto com ID: ${req.params.id}`)
        const product = await Product.findByPk(id)
        console.log('Produto encontrado:', product)
        if (!product) {
            return res.status(404).json({ message: 'Produto não encontrado' })
        }
        res.json(product)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

// Atualiza o produto
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) return res.status(404).json({ message: 'Produto não encontrado' })

        // Atualização do produto
        const updatedProduct = await product.update(req.body)
        res.json(updatedProduct)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Deleta o produto
exports.deleteProduct = async (req, res) => {
    const transaction = await sequelize.transaction()
    try {
        const product = await Product.findByPk(req.params.id)
        if (!product) {
            return res.status(400).json({ message: 'Produto não encontrado.' })
        }
        await AvailableID.create({ id: req.params.id })

        await Product.destroy({
            where: { id: req.params.id },
            transaction
        })

        await transaction.commit()
        res.status(200).json({ message: 'Produto deletado com sucesso.' })

    } catch (error) {
        await transaction.rollback()
        res.status(500).json({ message: 'Erro ao deletar o produto. Tente novamente mais tarde.' })
    }
}