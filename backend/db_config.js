const Sequelize = require('sequelize');

let database_name = 'TitanTrack';
let username = 'root';
let password = 'Hattie';
let port = 3306;

module.exports = new Sequelize(database_name, username, password, {dialect: 'mariadb', port: port});
