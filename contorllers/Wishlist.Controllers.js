const {wishlist,Sequelize} = require('../models')
exports.findAllWishlist = async(req,res)=>{
    const findWishlist = await wishlist.findAll();
    res.status(200).send(findWishlist)
}

exports.createWishlist = async(req,res)=>{
    const {product_wishlist_id,user_id} = req.body
    
    const createWishlist = await wishlist.create({
        product_wishlist_id,user_id}
    )
    
    res.status(200).send(createWishlist)
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
        
        if(deleted==1){
            res.status(200).json('the wishlist vwas deleted successfully')
        }else{
            res.status(400).json('cant delete the wishlist')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting wishlist,try again later!'})
    }
}