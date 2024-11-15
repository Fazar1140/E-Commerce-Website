const express = require('express');

const routes = express.Router();
const imageController = require('../contorllers/Image.Controllers');

routes.get('/:cover',imageController.getImage)

 
module.exports = routes