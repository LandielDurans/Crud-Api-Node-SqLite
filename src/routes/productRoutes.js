const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController')
const { validateProduct } = require('../utils/validation')

// Rota para criar produto com validação
router.post('/', validateProduct, productController.createProduct)

// Rota para pegar todos os produtos
router.get('/', productController.getAllProducts)

// Rota para pegar o ID do produto
router.get('/:id', productController.getProductById);

// Rota para atualizar o produto
router.put('/:id', validateProduct, productController.updateProduct)

// Rota para deletar o produto
router.delete('/:id', validateProduct, productController.deleteProduct)

module.exports = router