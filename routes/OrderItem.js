const express = require('express');

const OrderItemControllers = require('../contorllers/OrderItem.Controllers');

const routes = express.Router()

routes.post('/create',OrderItemControllers.createOrderItem)
routes.get('/',OrderItemControllers.getOrderItem)
routes.patch('/:id',OrderItemControllers.updateOrderItem)
routes.delete('/:id',OrderItemControllers.deleteOrderItem)

module.exports = routes
