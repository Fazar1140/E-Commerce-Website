const express = require('express');
const multer = require('multer');

const productsControllers = require('../contorllers/products.Controllers');
const {verifyToken} = require('../middleware/verifyToken')
const routes = express.Router()


const upload = multer({dest:'views/images'})
 
routes.get('/favicon.ico', (req, res) => res.status(204));

routes.post('/create',verifyToken,upload.single('cover'),productsControllers.createProduct)
routes.post('/',productsControllers.searchProduct)
routes.get('/create',verifyToken,productsControllers.createProductProvider)
routes.get('/',productsControllers.getAllProducts)
routes.get('/:id',productsControllers.getById)
routes.get('/editProduct/:id',verifyToken,productsControllers.getProductId)
routes.post('/:id',verifyToken,productsControllers.patchProduct)
routes.delete('/:id',productsControllers.deleteProduct)

module.exports = routes