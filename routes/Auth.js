const express = require('express');

const authController = require('../contorllers/Auth.Controllers')
const routes = express.Router();
const {verifyToken} = require('../middleware/verifyToken')
 

routes.post('/signin',authController.signin)
routes.post('/signup',authController.signup)
routes.get('/check-auth',verifyToken,authController.checkAuth)
routes.get('/signin',authController.signIn)
routes.get('/signup',authController.signUp)
routes.get('/logout',authController.logout)

module.exports = routes;