const {cart,Sequelize} = require('../models')

exports.getCarts = async(req,res)=>{
    const getCarts = await cart.findAll()
    res.status(201).send(getCarts)
}

exports.createCarts = async(req,res)=>{
    const {user_id,total} = req.body;
    const createCarts = await cart.create(
        {user_id,total}
    )
    res.status(201).send(createCarts)
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
            res.status(200).json('the cart was deleted successfully')
        }else{
            res.status(400).json('cant delete the cart')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting cart,try again later!'})
    }
}