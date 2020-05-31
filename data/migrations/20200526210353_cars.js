
exports.up = async function(knex) {
    return knex.schema.createTable('cars', (table) => {
      table.increments();
      table.text('make').notNullable();
      table.text('model').notNullable();
      table.integer('year').notNullable();
      table.integer('price').notNullable();
      table.text('color').notNullable();
    })
  };
  
  exports.down = function(knex) {
    
  };