const express = require('express')

const cartControllers = require('../contorllers/Cart.Controllers')

const routes = express.Router()

routes.post('/create',cartControllers.createCarts)
routes.get('/',cartControllers.getCarts)
routes.patch('/:id',cartControllers.patchCarts)
routes.delete('/:id',cartControllers.deleteCart)


module.exports = routes