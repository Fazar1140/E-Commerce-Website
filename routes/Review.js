const express = require('express');

const ReviewControllers = require('../contorllers/Review.Controllers.js');

const routes = express.Router()

routes.get('/',ReviewControllers.getAllReviews)


module.exports = routes