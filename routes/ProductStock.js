const express = require('express');
//const productsControllers = require('../contorllers/products.Controllers');
const productStockControllers = require('../contorllers/ProductStock.Controllers');
const {verifyToken} = require('../middleware/verifyToken');
const routes = express.Router()

routes.post('/create',productStockControllers.createProductStock)
routes.get('/',productStockControllers.getAllProductStock)
routes.get('/:id',verifyToken,productStockControllers.getById)
routes.post('/:id',verifyToken,productStockControllers.patchProductStock)
routes.delete('/:id',productStockControllers.deleteProductStock)

module.exports = routes