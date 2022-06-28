const Sequelize = require('sequelize');

module.exports = new Sequelize('todolist', 'eric', '123456', {
    host: 'localhost',
    dialect: 'postgres'
  });