const express = require('express');
const multer = require('multer');

const UserControllers = require('../contorllers/User.Controllers')
const {verifyToken} = require('../middleware/verifyToken')
 

const routes = express.Router()
const upload = multer({dest: 'views/uploads/'})

routes.get('/',UserControllers.getAllUser)
routes.get('/patch',verifyToken,UserControllers.getPutUser)
routes.get('/:id',UserControllers.getUserById)
routes.post('/:id',verifyToken,upload.single('avatar'),UserControllers.patchUser)

module.exports = routes