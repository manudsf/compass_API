const { Router } = require('express')
const CategoryController = require('../controllers/categoryController.js')

const rotas = Router();

rotas
    .get("/category", CategoryController.getCategory)
    .get("/category/:id",CategoryController.getCategoryByID)
    .post("category", CategoryController.insertCategory)
    .put("/category/:id", CategoryController.updateCategory)
    .delete("/category/:id", CategoryController.deleteCategory)

module.exports = rotas
