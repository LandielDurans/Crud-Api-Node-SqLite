const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const AvaliableID = sequelize.define('AvaliableID', {
    uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = AvaliableID