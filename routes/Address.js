const express = require('express');

const addressController = require('../contorllers/Address.Controllers')
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()

routes.post('/create',/*verifyToken*/addressController.create)
routes.get('/user/:id',addressController.getByUserId)
routes.patch('/:id',addressController.updateById)
routes.delete('/:id',addressController.deleteById)

module.exports = routes