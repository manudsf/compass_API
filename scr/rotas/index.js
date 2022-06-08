const express = require('express')
const machineRotas = require('./machineRotas')
const machinePartRotas = require('./machinePartRotas')

const rotas = (app) => {
    app.use(
        express.json(),
        machineRotas,
        machinePartRotas
    )
}

module.exports = rotas