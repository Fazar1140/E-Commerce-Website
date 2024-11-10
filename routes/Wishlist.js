const express = require('express')

const WishlistControllers = require('../contorllers/Wishlist.Controllers')

const routes = express.Router()

routes.post('/create',WishlistControllers.createWishlist)
routes.get('/',WishlistControllers.findAllWishlist)
routes.patch('/:id',WishlistControllers.updateWishlist)
routes.delete('/:id',WishlistControllers.deleteWishlist)

module.exports = routes