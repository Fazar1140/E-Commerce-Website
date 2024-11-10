const express = require('express')

const OrderDetailsControllers = require('../contorllers/OrderDetail.Controllers')

const routes = express.Router()

routes.post('/create',OrderDetailsControllers.createOrderDetail)
routes.get('/',OrderDetailsControllers.getOrderDetail)
routes.get('/:id',OrderDetailsControllers.getOrderDetailId)
routes.patch('/:id',OrderDetailsControllers.updateOrderDetail)
routes.delete('/:id',OrderDetailsControllers.deleteOrderDetail)

module.exports = routes