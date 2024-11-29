const express = require('express')

const WishlistControllers = require('../contorllers/Wishlist.Controllers')
const {verifyToken} = require('../middleware/verifyToken')

const routes = express.Router()

routes.post('/create/:id',verifyToken,WishlistControllers.createWishlist)
routes.get('/list',verifyToken,WishlistControllers.findAllWishlist)
routes.patch('/:id',WishlistControllers.updateWishlist)
routes.post('/delete/:id',verifyToken,WishlistControllers.deleteWishlist)

module.exports = routes