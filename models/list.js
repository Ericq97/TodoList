const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/database');

const list = db.define('list', {
  title: DataTypes.TEXT,
  description: DataTypes.TEXT,
});

// (async () => {
//   await db.sync({ force: true });
// })();

module.exports = list;