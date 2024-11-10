const express = require('express');
const productsControllers = require('../contorllers/products.Controllers');
const routes = express.Router()

routes.post('/create',productsControllers.createProduct)
routes.get('/',productsControllers.getAllProducts)
routes.get('/:id',productsControllers.getById)
routes.patch('/:id',productsControllers.patchProduct)
routes.delete('/:id',productsControllers.deleteProduct)

module.exports = routes