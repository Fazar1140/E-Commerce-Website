const {cart,Sequelize,cart_item,products,product_stock} = require('../models')

exports.getCarts = async(req,res)=>{
    const getCarts = await cart.findAll({include:cart_item})
    const getCartItem = await cart_item.findAll();
    const getProducts = await products.findAll({include:product_stock});
    const user = req.user;

    res.render('Cart',{getCarts,getCartItem,getProducts,user})
    
}

exports.createCarts = async(req,res)=>{
    const {user_id,total} = req.body;
    const id = req.params.id
    const users = req.user.id

    const createCarts = await cart.create(
        {user_id:users,total}
    )
    
    const createCartItem = await cart_item.create(
        {cart_id:cart.id,products_id:id,product_stock_id:id}
    )
    res.redirect('/')
}
exports.patchCarts = async(req,res)=>{
    try{ 
        const id = req.params.id;
        const {user_id,total} = req.body
        const patchCarts = await cart.update({
            user_id,total
        },{where:{id:id}})
        if(patchCarts == 1){
            res.send({
                message:'carts was updated successfully'
            });
        }else{
            res.send({
                message:`cannot update carts, something is wrong with inputing carts`
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in updating cart,try again later'})
    }
}
exports.deleteCart= async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await cart.destroy({where:{id:id}})
        
        if(deleted==1){
            res.redirect('/')
        }else{
            res.status(400).json('cant delete the cart')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting cart,try again later!'})
    }
}