const express = require('express');
const carsRouter = require('./carRoutes.js')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/cars', carsRouter);

module.exports = app;