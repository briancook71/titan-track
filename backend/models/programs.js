const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Programs = db_config.define('programs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    activity_day: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
}, {timestamps: false});

module.exports = Programs;