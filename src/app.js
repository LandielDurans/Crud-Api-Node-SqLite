const express = require('express')
const sequelize = require('./config/database')
const productRoutes = require('./routes/productRoutes')
const Product = require('./models/product')
const AvaliableID = require('./models/AvailableID')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bem vindo a API de produtos!')
})

app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 3000

sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`)
        })
    })
    .catch(err => console.error('Erro ao sincronizar o banco de dados:', err))