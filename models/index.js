const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employee', 'root', 'Password#12345', {
	host: 'localhost',
	port: 6000,
	dialect: 'mysql',
});

sequelize.authenticate();
console.log('Connection has been established successfully.');
