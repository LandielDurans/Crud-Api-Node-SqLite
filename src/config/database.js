const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados estabelecida com sucesso')
    })
    .catch(err => {
        console.console.error('Não foi possivel conectar ao banco de dados:', err);

    })

sequelize.sync({ force: true })
    .then(() => {
        console.log('Tabelas sincronizadas com sucesso');
    })
    .catch(err => {
        console.error('Erro ao sincronizar tabelas:', err);
    });


module.exports = sequelize