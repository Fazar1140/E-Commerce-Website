const express = require('express');

const routes = express.Router();
const avatarController = require('../contorllers/Avatar.Controllers');

routes.get('/:cover',avatarController.getImage)

 
module.exports = routes