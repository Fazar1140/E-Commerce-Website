const {wishlist,Sequelize,products} = require('../models')


exports.createWishlist = async(req,res)=>{
   

    const id = req.user.id 
    const product_id = req.params.id

    const wishChecker = await wishlist.findOne({where:{product_wishlist_id:product_id,user_id:id}}) 

    if(wishChecker){
        return res.status(400).json('error : product is already wishlist!')
    }
    console.log(product_id)
    const createWishlist = await wishlist.create(
        {product_wishlist_id:product_id,user_id:id}
    )
    
    res.redirect(`/${product_id}`)
    
    //res.status(200).send(createWishlist)
}

exports.findAllWishlist = async(req,res)=>{
    const Wishlist = await wishlist.findAll();
    const getProducts = await products.findAll();
    const user = req.user;
    res.render('wishlist',{Wishlist,getProducts,user})
    
}
exports.updateWishlist = async(req,res)=>{
        
    try{
    
        const id = req.params.id
        const {product_wishlist_id,user_id} = req.body

        const update = await wishlist.update({
            product_wishlist_id,user_id
        },{where:{id:id}})

        if(update == 1){
            res.send({
                message:'wishlist was updated successfully'
            });
        }else{
            res.send({
                message:`cannot update wishlist, something is wrong with inputing wishlist`
            })
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in updating wishlist,try again later'})
    }
}
exports.deleteWishlist= async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await wishlist.destroy({where:{id:id}})
        const Wishlist = await wishlist.findAll();
        const getProducts = await products.findAll();
        const user = req.user;
        
        res.redirect('/')

    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting wishlist,try again later!'})
    }
}