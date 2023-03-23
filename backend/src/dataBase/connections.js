const mongoose = require('mongoose');
const config = require('../config/config');

const connection = mongoose.connect(config.DATABASE);

mongoose.connection.on('connected', () => {
    console.log('Conexion existosa a [Mongo]')
});

mongoose.connection.on('error', () => {
    console.log('Algo fallo en la conexion a [Mongo]')
});

module.exports = connection;