const express = require('express');
const productsControllers = require('../contorllers/products.Controllers');
const productStockControllers = require('../contorllers/ProductStock.Controllers');
const routes = express.Router()

routes.post('/create',productStockControllers.createProductStock)
routes.get('/',productStockControllers.getAllProductStock)
routes.get('/:id',productStockControllers.getById)
routes.patch('/:id',productStockControllers.patchProductStock)
routes.delete('/:id',productStockControllers.deleteProductStock)

module.exports = routes