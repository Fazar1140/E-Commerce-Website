const {product_stock,Sequelze,products} = require('../models');

exports.getAllProductStock = async(req,res)=>{
    const getProductStock = await product_stock.findAll();
    res.status(200).send(getProductStock)
}
exports.getById = async(req,res)=>{
    const id = req.params.id;
    const user = req.user 
    console.log(id)
    const getProducts = await products.findByPk(id,{include:product_stock});
    
    res.render('EditStock',{getProducts,user})
}
exports.createProductStock = async(req,res)=>{
    const {size,price,quantity} = req.body;
    
    const makeProduct = await product_stock.create({
        size,price,quantity
     
    })
    res.status(201).send(makeProduct)
}
exports.patchProductStock = async(req,res)=>{
    
        try{
    
            const id = req.params.id
            const {size,price,quantity} = req.body;
    
            const update = await product_stock.update({
                size,price,quantity
            },{where:{id:id}})
    
            
            if(update == 1){
                res.redirect(`/${id}`)
            }else{
                res.send({
                    message:`cannot update product stock, something is wrong with inputing product stock`
                })
            }
        }catch(err){
            console.log(err)
            res.status(500).json({message:'error in updating product stock,try again later'})
        }
    
}
exports.deleteProductStock = async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await product_stock.destroy({where:{id:id}})
        
        if(deleted==1){
            res.status(200).json('the product stock was deleted successfully')
        }else{
            res.status(400).json('cant delete the product stock')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting products,try again later!'})
    }
}