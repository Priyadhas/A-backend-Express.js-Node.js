const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('my_data', 'postgres', 'qwert@123', {
  host: 'localhost',
  dialect: 'postgres',  
});

module.exports = sequelize;
