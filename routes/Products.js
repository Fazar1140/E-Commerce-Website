const express = require('express');
const productsControllers = require('../contorllers/products.Controllers');
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()
 
routes.get('/favicon.ico', (req, res) => res.status(204));

routes.post('/create',productsControllers.createProduct)
routes.post('/',productsControllers.searchProduct)
routes.get('/',productsControllers.getAllProducts)
routes.get('/:id',productsControllers.getById)
routes.patch('/:id',productsControllers.patchProduct)
routes.delete('/:id',productsControllers.deleteProduct)

module.exports = routes