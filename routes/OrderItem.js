const express = require('express');

const OrderItemControllers = require('../contorllers/OrderItem.Controllers');
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()

routes.post('/create',verifyToken,OrderItemControllers.createOrderItem)
routes.post('/edit/:id',verifyToken,OrderItemControllers.updateOrderItem)
routes.get('/order-list',verifyToken,OrderItemControllers.OrderItemProvider)
routes.get('/order-admin',verifyToken,OrderItemControllers.OrderItemAdminProvider)
routes.get('/',OrderItemControllers.getOrderItem)
routes.delete('/:id',OrderItemControllers.deleteOrderItem)

module.exports = routes
