const cars = require("../database");

const db = require('../database.js');


function find() {
  return db('cars');
}
function findById(id) {
  return db('cars').where({id})
}

function insert(cars) {
    return db('cars').insert(cars)
}

function remove(id) {
  return db('cars').where({ id }).del();
}
function update(id, update) {
  return db('cars').where({ id }).update(update);
}

module.exports = {
    find,
    findById,
    remove,
    insert,
    update,
  };