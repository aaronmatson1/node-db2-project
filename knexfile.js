  
// Update with your config settings.
const path = require('path');
module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/cars.db3'
    },
    migrations: {
      directory: path.resolve('data', 'migrations')
    },
    seeds: {
      directory: path.resolve('data', 'seeds')
    },
  }

};