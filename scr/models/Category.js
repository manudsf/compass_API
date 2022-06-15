const mysql = require('../config/connect.js')

const categorySchema = new mysql.Schema(        // Arrumar o tipo de dados 
    {
        id: {type: String},
        nome: {type: String, require: true}
    }
);

const category = mysql.model('category', categorySchema)

module.exports = category

