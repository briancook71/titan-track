const Sequelize = require('sequelize');
const db_config = require('./../db_config');

const Workouts = db_config.define('workouts', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    movement: {
        type: Sequelize.STRING,
        allowNull: false
    },
    program_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    movement_type: {
        type: Sequelize.ENUM('Push','Pull'),
        allowNull: false
    },
    
}, {timestamps: false});

module.exports = Workouts;