const express = require('express');

const categoryController = require('../contorllers/Category.Controllers')
const routes = express.Router();
//const {verifyToken} = require('../middleware/verifyToken')
 
//routes.get('/check-auth',verifyToken,authController.checkAuth)
routes.get('/',categoryController.getAllCategories)
routes.post('/',categoryController.createCategories)
module.exports = routes;