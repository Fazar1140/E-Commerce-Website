const express = require('express');

const addressController = require('../contorllers/Address.Controllers')
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()

routes.get('/details',verifyToken,addressController.addressProvider)
routes.post('/create',verifyToken,addressController.create)
routes.post('/update',verifyToken,addressController.addressEdit)
routes.get('/user/:id',addressController.getByUserId)
routes.patch('/:id',addressController.updateById)
routes.delete('/:id',addressController.deleteById)

module.exports = routes