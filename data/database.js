require('dotenv').config();
const knex = require('knex');
const config = require('../knexfile.js');

//selection of the dev object from our knexfile
const env = process.env.NODE_ENV || 'development';
const db = knex(config[env]);

//export for use in codebase
module.exports = db;
