const express = require('express');

const routes = express.Router();
const CarouselController = require('../contorllers/Carousel.controllers')

routes.get('/:cover',CarouselController.getImage)

 
module.exports = routes