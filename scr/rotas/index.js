const express = require('express')
const categoryRotas = require('./categoryRotas')
const productRotas = require('./productRotas')

const rotas = (app) => {
    app.use(
        express.json(),
        categoryRotas,
        productRotas
    )
}

module.exports = rotas