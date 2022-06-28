const { Sequelize, Model, DataTypes } = require('sequelize');
const db = require('../config/database');

const item = db.define('item', {
  title: DataTypes.TEXT,
  category: DataTypes.INTEGER
});

// (async () => {
//   await db.sync({ force: true });
// })();

module.exports = item;