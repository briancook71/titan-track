const Sequelize = require('sequelize');
const db_config = require('../db_config');

const Trainings = db_config.define('trainings', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    workout_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    workout_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    sets: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    reps: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    
}, {timestamps: false});

module.exports = Trainings;