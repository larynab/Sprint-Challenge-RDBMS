//Database is using Knex 
const knex = require ('knex');

//Knex Settings
const knexConfig = require('../knexfile.js');

//Export Knex settings
module.exports = knex(knexConfig.development);