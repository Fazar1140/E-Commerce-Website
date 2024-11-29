require('dotenv').config();

const authRoutes = require('./routes/Auth')
const UserRoutes = require('./routes/User')
const AddressRoutes = require('./routes/Address')
const CategoryRoutes = require('./routes/Category')
const SubcategoryRoutes = require('./routes/Subcategory')
const ProductsRoutes  = require('./routes/Products')
const ProductStockRoutes = require('./routes/ProductStock')
const WishlistRoutes = require('./routes/Wishlist')
const CartRoutes = require('./routes/Cart')
const CartItemRoutes = require('./routes/CartItem')
const OrderItemRoutes = require('./routes/OrderItem')
const PaymentRoutes = require('./routes/PaymentDetails')
const OrderDetailRoutes = require('./routes/OrderDetails')
const ReviewRoutes = require('./routes/Review')
const imageRoutes = require('./routes/Image')
const CarouselImageRoutes = require('./routes/Carousel')
const avatarRoutes = require('./routes/Avatar')

const {verifyToken} = require('./middleware/verifyToken')

const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const { getAllProducts } = require('./contorllers/products.Controllers');
 

const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
 
 

const port = process.env.PORT || 5000
 


app.use('/',ProductsRoutes)
app.use('/images',imageRoutes)
app.use('/avatar',avatarRoutes)
app.use('/CarouselImage',CarouselImageRoutes)
app.use('/Auth',authRoutes);
app.use('/User',UserRoutes)
app.use('/Address',AddressRoutes)
app.use('/Category',CategoryRoutes)
app.use('/Subcategory',SubcategoryRoutes)
app.use('/ProductStock',ProductStockRoutes)
app.use('/Wishlist',WishlistRoutes)
app.use('/Cart',CartRoutes)
app.use('/CartItem',CartItemRoutes)
app.use('/OrderItem',OrderItemRoutes) 
app.use('/PaymentDetail',PaymentRoutes)
app.use('/OrderDetail',OrderDetailRoutes)
app.use('/Reviews',ReviewRoutes)
 
 

app.listen(port,(req,res)=>{
    console.log('listen to the port '+ port);
})