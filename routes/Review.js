const express = require('express');

const ReviewControllers = require('../contorllers/Review.Controllers.js');
const {verifyToken} = require('../middleware/verifyToken.js');
const routes = express.Router()

routes.get('/',ReviewControllers.getAllReviews)
routes.post('/send/:id',verifyToken,ReviewControllers.createComment)

module.exports = routes