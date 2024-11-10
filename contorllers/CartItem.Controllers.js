const {cart_item,Sequelize} = require('../models')

exports.getCartItem = async(req,res)=>{
    const getCartItem = await cart_item.findAll()
    res.status(201).send(getCartItem)
}

exports.createCartItem = async(req,res)=>{
    const {cart_id,products_id,product_stock_id} = req.body
    const createCartItem = await cart_item.create(
        {cart_id,products_id,product_stock_id}
    )
    res.status(201).send(createCartItem)
}

exports.patchCartItem = async(req,res)=>{
    try{
    const id = req.params.id
    const {cart_id,products_id,product_stock_id} = req.body 

    const patchCartItem = await cart_item.update({
        cart_id,products_id,product_stock_id
    },{where:{id:id}})
    if(patchCartItem == 1){
        res.send({
            message:'cartItem was updated successfully'
        });
    }else{
        res.send({
            message:`cannot update cartItem, something is wrong with inputing cartItem`
        })
    }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in updating cartItem,try again later'})
    }   
}
exports.deleteCartItem= async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await cart_item.destroy({where:{id:id}})
        
        if(deleted==1){
            res.status(200).json('the cartItem was deleted successfully')
        }else{
            res.status(400).json('cant delete the cartItem')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting cartItem,try again later!'})
    }
}