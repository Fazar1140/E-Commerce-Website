const express = require('express');

const UserControllers = require('../contorllers/User.Controllers')

const routes = express.Router()

routes.get('/',UserControllers.getAllUser)
routes.get('/:id',UserControllers.getUserById)
routes.patch('/:id',UserControllers.patchUser)

module.exports = routes