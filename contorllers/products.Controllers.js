const {products,Sequelze} = require('../models');

exports.getAllProducts = async(req,res)=>{
    const getProducts = await products.findAll();
    res.status(200).send(getProducts)
}
exports.getById = async(req,res)=>{
    const id = req.params.id;
    console.log(id)
    const getProducts = await products.findByPk(id);
    res.status(200).send(getProducts)
}
exports.createProduct = async(req,res)=>{
    const {name,description,short_description,cover,category_id} = req.body;
    
    const makeProduct = await products.create({
        name,
        description,
        short_description,
        cover,
        category_id,
     
    })
    res.status(201).send(makeProduct)
}
exports.patchProduct = async(req,res)=>{
    
        try{
    
            const id = req.params.id
            const {name,description,short_description,cover,category_id} = req.body
    
            const update = await products.update({
                name,description,short_description,cover,category_id
            },{where:{id:id}})
    
            if(update == 1){
                res.send({
                    message:'products was updated successfully'
                });
            }else{
                res.send({
                    message:`cannot update products, something is wrong with inputing products`
                })
            }
        }catch(err){
            console.log(err)
            res.status(500).json({message:'error in updating products,try again later'})
        }
    
}
exports.deleteProduct = async(req,res)=>{
    try{
        const id = req.params.id
        const deleted = await products.destroy({where:{id:id}})
        
        if(deleted==1){
            res.status(200).json('the products was deleted successfully')
        }else{
            res.status(400).json('cant delete the products')
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message:'error in deleting products,try again later!'})
    }
}