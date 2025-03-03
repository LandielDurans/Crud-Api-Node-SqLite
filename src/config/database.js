const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

const authenticateDatabase = async () => {
    try {
        await sequelize.authenticate()
        console.log('Conexão com o banco de dados estabelecida com sucesso')

    } catch (error) {
        console.console.error('Não foi possivel conectar ao banco de dados:', error);
    }
}

const syncDatabase = async () => {
    try {
        const isDevelopment = process.env.NODE_ENV === 'development'
        await sequelize.sync({force: isDevelopment})
        console.log('Tabelas sincronizadas com sucesso.')
    } catch (err) {
        console.error('Erro ao sincronizar tabelas:', err);
    }
}

authenticateDatabase();
syncDatabase();

module.exports = sequelize