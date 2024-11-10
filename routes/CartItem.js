const express = require('express')

const cartItemController = require('../contorllers/CartItem.Controllers')

const routes = express.Router()

routes.post('/create',cartItemController.createCartItem)
routes.get('/',cartItemController.getCartItem)
routes.patch('/:id',cartItemController.patchCartItem)
routes.delete('/:id',cartItemController.deleteCartItem)


module.exports = routes