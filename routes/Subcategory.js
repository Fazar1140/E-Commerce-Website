const express = require('express');
const subcategoryController = require('../contorllers/Subcategory.Controllers')

const routes = express.Router();

routes.get('/',subcategoryController.getAllSubcategories)
routes.post('/',subcategoryController.createSubcategories)

module.exports = routes