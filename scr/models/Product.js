const mysql = require('../config/connect.js')

const productSchema = new mysql.Schema(             // Arrumar o tipo de dados
    {
        id: {type: String},
        nome: {type: String, require: true},
        preco: {type: Number, require: true},                      
        peso: {type: Number, require: true},                       
        category_id: {type: String},                
        
    }
);

const product = mysql.model('product', productSchema);

module.exports = product
