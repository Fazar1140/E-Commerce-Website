const express = require('express')

const cartControllers = require('../contorllers/Cart.Controllers')
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()

routes.post('/create/:id',verifyToken,cartControllers.createCarts)
routes.get('/cartList',verifyToken,cartControllers.getCarts)
routes.patch('/:id',cartControllers.patchCarts)
routes.post('/delete/:id',cartControllers.deleteCart)


module.exports = routes