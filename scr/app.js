const express = require('express')
const app = express()
const dotevn = require('dotenv').config()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const rotas = require('./rotas/index')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

rotas(app)

app.listen(port, () => console.log(`Servidor ouvindo na porta: http://localhost:${port}`))