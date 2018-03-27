'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'postgres://postgres:udTCpLt@localhost/schedule_arranger',
    { logging: true });

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};
