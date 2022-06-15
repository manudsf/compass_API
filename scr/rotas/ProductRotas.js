const { Router } = require('express')
const ProductController = require('../controllers/productController.js')

const rotas = Router();

rotas
    .get("/product", ProductController.getProduct)
    .get("/product/:id", ProductController.getProductById)
    .post("/product", ProductController.insertProduct)
    .put("/product/:id", ProductController.updateProduct)
    .delete("/product/:id", ProductController.deleteProduct)

module.exports = rotas